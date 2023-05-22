import { Element } from "react-scroll";

import BenefitsList from "@/components/Benefits/BenefitsList/BenefitsList";

import { IAllBenefits } from "@/shared/queryGrahpQl/QueryModels";

export interface IBenefitsProps {
  benefits: IAllBenefits;
}

const BenefitsSection: React.FC<IBenefitsProps> = ({ benefits }) => {
  return (
    <Element name="benefits">
      <section className=" py-20 desktop:py-24">
        <div className="container mx-auto flex flex-col items-center px-6 tablet:px-16 desktop:px-20">
          <h2 className="hidden">Привилегии</h2>
          <BenefitsList benefits={benefits} />
        </div>
      </section>
    </Element>
  );
};

export default BenefitsSection;
