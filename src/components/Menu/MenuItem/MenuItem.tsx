import Image from "next/image";

import { IMenuItem } from "@/shared/queryGrahpQl/HomeQuerry/homeQueryModels";

interface IBenefitItemProp {
  menuItem: IMenuItem;
}
const MenuItem: React.FC<IBenefitItemProp> = ({ menuItem }) => {
  const { disheImg, varietyOfDishes } = menuItem;
  return (
    <li className="rounded-3xl overflow-hidden shadow-lg ">
      <article className="flex flex-col items-center ">
        <div className="max-w-[300px]">
          <Image
            loading="lazy"
            src={disheImg.url}
            width={400}
            height={400}
            alt={disheImg.alt}
          />
        </div>
        <div className="p-5 min-w-full text-center ">
          <h3>{varietyOfDishes}</h3>
        </div>
      </article>
    </li>
  );
};

export default MenuItem;
