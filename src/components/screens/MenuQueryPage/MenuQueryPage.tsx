import Link from "next/link";
import { useRouter } from "next/router";

import BodyContentWrapper from "@/helpers/BodyContentWrapper/BodyContentWrapper";
import HeadLayout from "@/components/layout/HeadLayout/HeadLayout";
import SimpleHeader from "@/components/layout/SimpleHeader/SimpleHeader";
import PageMenuQueryList from "@/components/Menu/PageMenuQueryList/PageMenuQueryList";

import { IHomeQueryProps } from "@/shared/queryGrahpQl/QueryModels";

const MenuQueryPage: React.FC<IHomeQueryProps> = ({ dishes }) => {
  const { allDishes, allVariantDishes } = dishes;
  const { asPath, pathname } = useRouter();
  console.log(`path`, asPath);
  console.log(`path name`, pathname);

  const metaProps = [
    {
      name: `Блюда ${allVariantDishes[0].varietyOfDishes}`,
      content: `наше меню`,
    },
  ];
  return (
    <BodyContentWrapper>
      <HeadLayout metaProps={metaProps} />
      <SimpleHeader />
      <main className="flex flex-grow flex-col">
        <section className="relative py-20 desktop:py-24">
          <div className="container mx-auto flex flex-col items-center px-6 tablet:px-16 desktop:px-20 ">
            <Link
              href="/menu"
              className="absolute left-5 top-5 rounded-lg  border-2 border-neutral-200 bg-transparent text-neutral-400 transition-all hover:scale-[1.1] hover:border-opacity-75 hover:bg-neutral-400 hover:bg-opacity-10  hover:shadow-lg hover:shadow-slate-500 mobile:p-2 mobile:text-sm tablet:left-10 tablet:top-5 tablet:p-4"
            >
              Назад
            </Link>
            <h1 className="mb-8 text-center font-[Comforter] text-7xl text-black">
              Наше меню
            </h1>
            {allDishes.length ? (
              <PageMenuQueryList allDishes={allDishes} allVariantDishes={[]} />
            ) : (
              <span>Ожидайте. скоро появится в нашем меню =)</span>
            )}
          </div>
        </section>
      </main>
    </BodyContentWrapper>
  );
};

export default MenuQueryPage;
