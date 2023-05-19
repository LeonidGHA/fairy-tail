import HomePage from "@/components/screens/HomePage/HomePage";
import { GetStaticProps, GetServerSideProps } from "next";

import { request } from "@/shared/graphApi/graphApi";

import {
  MENU_QUERY,
  ALL_BENEFITS,
} from "@/shared/queryGrahpQl/HomeQuerry/homeQuery";

import {
  IAllMenu,
  IAllBenefits,
} from "@/shared/queryGrahpQl/HomeQuerry/homeQueryModels";

interface IHomeProps {
  props: {
    menu: IAllMenu;
    benefits: IAllBenefits;
  };
}

export default function Home(props: {
  menu: IAllMenu;
  benefits: IAllBenefits;
}) {
  return <HomePage props={props} />;
}

export const getServerSideProps = async () => {
  const menu = await request({
    query: MENU_QUERY,
  });
  const benefits = await request({
    query: ALL_BENEFITS,
  });

  return {
    props: { menu, benefits },
  };
};
