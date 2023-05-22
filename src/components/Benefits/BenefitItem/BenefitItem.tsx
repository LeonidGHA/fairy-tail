import Image from "next/image";

import { IBenefitsItem } from "@/shared/queryGrahpQl/QueryModels";

interface IBenefitItemProp {
  benefitItem: IBenefitsItem;
  idx: number;
}

const BenefitItem: React.FC<IBenefitItemProp> = ({ benefitItem, idx }) => {
  const { coverImg, description, title } = benefitItem;

  return (
    <li>
      <article
        className={`flex items-center ${
          idx % 2 ? "flex-row-reverse" : `flex-row`
        } gap-4 mobileOnly:flex-col`}
      >
        <div className="  h-fit grow-0 shadow-xl tablet:max-w-[300px] desktop:max-w-[400px]">
          <Image
            loading="lazy"
            src={coverImg.url}
            width={coverImg.width}
            height={500}
            alt={coverImg.alt}
            className="object-contain"
          />
        </div>
        <div className="border-2 border-slate-50 p-5 shadow-xl desktop:flex desktop:flex-col desktop:justify-center">
          <h3 className="mb-5 font-bold mobileOnly:text-center">{title}</h3>
          <p className="max-w-[400px] mobileOnly:text-center">{description}</p>
        </div>
      </article>
    </li>
  );
};

export default BenefitItem;
