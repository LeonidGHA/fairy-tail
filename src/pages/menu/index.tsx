import { GetStaticProps } from "next";

import MenuPage from "@/components/screens/MenuPage/MenuPage";

import { request } from "@/shared/graphApi/graphApi";

import { MENU_QUERY } from "@/shared/queryGrahpQl/CMSQuerry/CMSQuery";

import { IAllMenu, IMenuProps } from "@/shared/queryGrahpQl/QueryModels";

const Menu: React.FC<IMenuProps> = ({ menu }) => {
  return <MenuPage menu={menu} />;
};

export const getStaticProps: GetStaticProps<IMenuProps> = async () => {
  try {
    const menu: IAllMenu = await request<IAllMenu>({
      query: MENU_QUERY,
    });

    return {
      props: { menu },
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

export default Menu;
