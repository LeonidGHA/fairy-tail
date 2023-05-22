import Image from "next/image";

import { IDish } from "@/shared/queryGrahpQl/QueryModels";
const PageMenuQueryItem = ({ dish }: { dish: IDish }) => {
  const { discription, img, price, title, weight } = dish;
  return (
    <li className="group flex  overflow-hidden rounded-3xl shadow-lg shadow-slate-400  hover:shadow-lime-200  ">
      <article className="flex h-full grow flex-col items-center ">
        <div className="flex overflow-hidden">
          <Image
            loading="lazy"
            src={img.url}
            width={img.width}
            height={500}
            alt={`photo ${title}`}
            className="transition-transform group-hover:scale-105 "
          />
        </div>
        <div className="flex min-w-full grow flex-col justify-center bg-slate-50 p-2 text-center tablet:p-5">
          <h3 className="mb-2 font-semibold">{title}</h3>
          <p className="mb-2 ">{discription}</p>
          <span className="mb-2">{weight} г.</span>
          <span className="mb-2">{price} грн.</span>
        </div>
      </article>
    </li>
  );
};

export default PageMenuQueryItem;
