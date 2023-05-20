import Image from "next/image";
import Link from "next/link";

import { IMenuItem } from "@/shared/queryGrahpQl/HomeQuerry/homeQueryModels";

interface IBenefitItemProp {
  menuItem: IMenuItem;
}
const MenuItem: React.FC<IBenefitItemProp> = ({ menuItem }) => {
  const { disheImg, varietyOfDishes } = menuItem;
  return (
    <div className="group flex overflow-hidden rounded-3xl shadow-lg shadow-slate-400 hover:shadow-lime-200  mobile:h-40 tablet:h-48 desktop:h-60 ">
      <Link href="/contact">
        <article className="flex h-full grow flex-col items-center ">
          <div className="flex  h-24 overflow-hidden tablet:h-32 desktop:h-44 ">
            <Image
              loading="lazy"
              src={disheImg.url}
              width={disheImg.width}
              height={200}
              alt={disheImg.alt}
              className="transition-transform group-hover:scale-105 "
            />
          </div>
          <div className="flex min-w-full grow flex-col justify-center bg-slate-50 p-2 tablet:p-5">
            <h3 className="text-center">{varietyOfDishes}</h3>
          </div>
        </article>
      </Link>
    </div>
  );
};

export default MenuItem;
