import Image from "next/image";
import Link from "next/link";
import { IMenuItem } from "@/shared/queryGrahpQl/QueryModels";

const PageMenuItem = ({ menuItem }: { menuItem: IMenuItem }) => {
  const { disheImg, varietyOfDishes, id } = menuItem;

  return (
    <li className="group flex h-48 overflow-hidden rounded-3xl shadow-lg shadow-slate-400  hover:shadow-lime-200 desktop:h-60 ">
      <Link href={`/menu/${id}`}>
        <article className="flex h-full grow flex-col items-center ">
          <div className="flex  h-40 overflow-hidden tablet:h-32 desktop:h-44  desktop:max-w-[400px]">
            <Image
              loading="lazy"
              src={disheImg.url}
              width={disheImg.width}
              height={500}
              alt={disheImg.alt}
              className=" transition-transform group-hover:scale-105 "
            />
          </div>
          <div className="flex min-w-full grow flex-col justify-center bg-slate-50 p-2 tablet:p-5">
            <h3 className="text-center">{varietyOfDishes}</h3>
          </div>
        </article>
      </Link>
    </li>
  );
};

export default PageMenuItem;
