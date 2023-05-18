import BodyContentWrapper from "@/helpers/BodyContentWrapper/BodyContentWrapper";
import HeadLayout from "@/components/layout/HeadLayout/HeadLayout";
import Header from "@/components/layout/header/Header";
import HeroSection from "@/components/section/HeroSection/HeroSection";
import BenefitsSection from "@/components/section/BenefitsSection/BenefitsSection";
import MenuSection from "@/components/section/MenuSection/MenuSection";

import {
  IAllMenu,
  IAllBenefits,
} from "@/shared/queryGrahpQl/HomeQuerry/homeQueryModels";

const metaProps = [{ name: `home`, content: `welcome to site` }];

interface IHomeProps {
  props: {
    menu: IAllMenu;
    benefits: IAllBenefits;
  };
}

const HomePage: React.FC<IHomeProps> = ({ props }) => {
  const { menu, benefits } = props;

  return (
    <BodyContentWrapper>
      <HeadLayout metaProps={metaProps} />
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection benefits={benefits} />
        <MenuSection menu={menu} />
      </main>
    </BodyContentWrapper>
  );
};

export default HomePage;
