import BenefitItem from "../BenefitItem/BenefitItem";

import { IAllBenefits } from "@/shared/queryGrahpQl/HomeQuerry/homeQueryModels";

interface IBenefitsListProps {
  benefits: IAllBenefits;
}

const BenefitsList: React.FC<IBenefitsListProps> = ({ benefits }) => {
  const { allBenefitArticles } = benefits;

  return (
    <ul className="flex flex-col p-5 gap-5">
      {allBenefitArticles.map((benefitItem, idx) => (
        <BenefitItem key={benefitItem.id} benefitItem={benefitItem} idx={idx} />
      ))}
    </ul>
  );
};

export default BenefitsList;
