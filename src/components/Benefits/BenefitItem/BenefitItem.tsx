import Image from "next/image";

import { IBenefitsItem } from "@/shared/queryGrahpQl/HomeQuerry/homeQueryModels";

interface IBenefitItemProp {
  benefitItem: IBenefitsItem;
  idx: number;
}

const BenefitItem: React.FC<IBenefitItemProp> = ({ benefitItem, idx }) => {
  const { coverImg, description, title } = benefitItem;

  return (
    <li>
      <article
        className={`flex ${idx % 2 ? "flex-row-reverse" : `flex-row`} gap-4 `}
      >
        <div className="max-w-[400px]">
          <Image
            loading="lazy"
            src={coverImg.url}
            width={1000}
            height={1000}
            alt={`photo`}
          />
        </div>
        <div className="p-5 ">
          <h3 className="mb-5">{title}</h3>
          <p className="max-w-[400px]">{description}</p>
        </div>
      </article>
    </li>
  );
};

export default BenefitItem;
