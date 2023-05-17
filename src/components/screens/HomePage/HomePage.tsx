import BodyContentWrapper from "@/helpers/BodyContentWrapper/BodyContentWrapper";
import HeadLayout from "@/components/layout/HeadLayout/HeadLayout";
import Header from "@/components/layout/header/Header";
import HeroSection from "@/components/section/HeroSection/HeroSection";
import BenefitsSection from "@/components/section/BenefitsSection/BenefitsSection";

import Image from "next/image";

const metaProps = [{ name: `home`, content: `welcome to site` }];
import {
  IAllMenu,
  IBgImage,
} from "@/shared/queryGrahpQl/HomeQuerry/homeQueryModels";
import React from "react";

const HomePage = ({ props }: { props: { menu: IAllMenu } }) => {
  const { menu } = props;

  return (
    <BodyContentWrapper>
      <HeadLayout metaProps={metaProps} />
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />

        {/* <section className="mt-10 py-10 h-screen">
          <h1 className="text-center">Hello</h1>
        </section> */}
      </main>
    </BodyContentWrapper>
  );
};

export default HomePage;
