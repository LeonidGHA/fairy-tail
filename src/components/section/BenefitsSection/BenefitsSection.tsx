import { Element } from "react-scroll";

import BenefitsList from "@/components/Benefits/BenefitsList/BenefitsList";

import { IAllBenefits } from "@/shared/queryGrahpQl/HomeQuerry/homeQueryModels";

export interface IBenefitsProps {
  benefits: IAllBenefits;
}

const BenefitsSection: React.FC<IBenefitsProps> = ({ benefits }) => {
  return (
    <Element name="benefits">
      <section className=" py-20 ">
        <div className="container mx-auto px-20 flex flex-col items-center">
          <h2 className="hidden">benefits!</h2>
          <BenefitsList benefits={benefits} />
        </div>
      </section>
    </Element>
  );
};

export default BenefitsSection;
