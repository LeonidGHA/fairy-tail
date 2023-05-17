import HomePage from "@/components/screens/HomePage/HomePage";

import { request } from "@/shared/graphApi/graphApi";

import { MENU_QUERY } from "@/shared/queryGrahpQl/HomeQuerry/homeQuery";

import { IAllMenu } from "@/shared/queryGrahpQl/HomeQuerry/homeQueryModels";

export default function Home(props: { menu: IAllMenu }) {
  return <HomePage props={props} />;
}

export async function getStaticProps() {
  const menu = await request({
    query: MENU_QUERY,
  });

  return {
    props: { menu },
  };
}
