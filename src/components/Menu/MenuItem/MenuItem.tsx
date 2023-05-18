import Image from "next/image";

import { IMenuItem } from "@/shared/queryGrahpQl/HomeQuerry/homeQueryModels";

interface IBenefitItemProp {
  menuItem: IMenuItem;
}
const MenuItem: React.FC<IBenefitItemProp> = ({ menuItem }) => {
  const { disheImg, varietyOfDishes } = menuItem;
  return (
    <div
      className="rounded-3xl overflow-hidden shadow-slate-400 shadow-lg "
      onClick={() => console.log(`li`)}
    >
      <article className="flex flex-col items-center ">
        <div className="flex max-w-full h-52  overflow-hidden">
          <Image
            loading="lazy"
            src={disheImg.url}
            width={disheImg.width}
            height={200}
            alt={disheImg.alt}
          />
        </div>
        <div className="p-5 min-w-full text-center  bg-slate-50 ">
          <h3>{varietyOfDishes}</h3>
        </div>
      </article>
    </div>
  );
};

export default MenuItem;
