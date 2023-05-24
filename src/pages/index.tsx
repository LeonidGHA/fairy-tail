import { GetStaticProps } from "next";

import HomePage from "@/components/screens/HomePage/HomePage";

import { request } from "@/shared/graphApi/graphApi";

import {
  MENU_QUERY,
  ALL_BENEFITS,
} from "@/shared/queryGrahpQl/CMSQuerry/CMSQuery";

import { IAllMenu, IAllBenefits } from "@/shared/queryGrahpQl/QueryModels";

interface IHomeProps {
  menu: IAllMenu;
  benefits: IAllBenefits;
}

const Home: React.FC<IHomeProps> = (props) => {
  return <HomePage {...props} />;
};

export const getStaticProps: GetStaticProps<IHomeProps> = async () => {
  try {
    const menu: IAllMenu = await request<IAllMenu>({
      query: MENU_QUERY,
    });
    const benefits: IAllBenefits = await request<IAllBenefits>({
      query: ALL_BENEFITS,
    });
    return {
      props: { menu, benefits },
      revalidate: 60,
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

export default Home;
