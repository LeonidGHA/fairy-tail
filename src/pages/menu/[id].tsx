import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";

import MenuQueryPage from "@/components/screens/MenuQueryPage/MenuQueryPage";

import { request } from "@/shared/graphApi/graphApi";

import {
  ALL_DISHES_QUERY,
  MENU_QUERY,
} from "@/shared/queryGrahpQl/CMSQuerry/CMSQuery";

import {
  IAllMenu,
  IAllDishes,
  IHomeQueryProps,
} from "@/shared/queryGrahpQl/QueryModels";

const MenuQuery: NextPage<IHomeQueryProps> = ({ dishes }) => {
  return <MenuQueryPage dishes={dishes} />;
};

export default MenuQuery;

export const getStaticProps: GetStaticProps<IHomeQueryProps> = async ({
  params,
}) => {
  try {
    const allDishes: IAllDishes = await request<IAllDishes>({
      query: ALL_DISHES_QUERY,
      variables: { ItemId: params?.id },
    });

    return {
      props: {
        dishes: allDishes,
      },
      revalidate: 10,
    };
  } catch (error) {
    return {
      redirect: {
        destination: "404",
        permanent: false,
      },
    };
  }
};

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  try {
    const menu: IAllMenu = await request<IAllMenu>({
      query: MENU_QUERY,
    });

    const paths = menu.allVariantDishes.map((dishes) => ({
      params: {
        id: dishes.id,
      },
    }));

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    return { paths: [{ params: { id: "" } }], fallback: false };
  }
};
