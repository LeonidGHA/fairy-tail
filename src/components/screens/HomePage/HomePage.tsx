import BodyContentWrapper from "@/helpers/BodyContentWrapper/BodyContentWrapper";
import HeadLayout from "@/components/layout/HeadLayout/HeadLayout";
import Header from "@/components/layout/header/Header";
import HeroSection from "@/components/section/HeroSection/HeroSection";
import BenefitsSection from "@/components/section/BenefitsSection/BenefitsSection";

const metaProps = [{ name: `home`, content: `welcome to site` }];

const HomePage = () => {
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
