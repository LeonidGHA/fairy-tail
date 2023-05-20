import Link from "next/link";

import css from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={css.hero}>
      <div className="container mx-auto flex flex-col items-center px-6 tablet:px-16 desktop:px-20">
        <h1 className=" mobile:text-large mb-20 text-center font-[Comforter] text-neutral-200 underline decoration-4 mobile:text-4xl tablet:text-6xl desktop:text-8xl">
          Добро пожаловать к нам!
        </h1>
        <Link
          href="/contact"
          className=" rounded-lg border-2 border-neutral-200  bg-transparent text-neutral-200 transition-all hover:scale-[1.1] hover:border-opacity-75  hover:bg-neutral-400 hover:bg-opacity-10 hover:shadow-lg hover:shadow-slate-500 mobile:p-2 mobile:text-sm tablet:p-4  "
        >
          Оставить заявку
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
