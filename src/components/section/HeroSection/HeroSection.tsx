import Link from "next/link";
import { Element } from "react-scroll";

import css from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={css.hero}>
      <Element name="hero"></Element>
      <div className="container mx-auto px-20 flex flex-col items-center">
        <h1 className="text-5xl font-mono text-neutral-200 mb-4">
          Добро пожаловать к нам!
        </h1>
        <Link
          href="/contact"
          className=" p-2 text-neutral-200 bg-transparent  rounded-lg border-neutral-200 border-2 hover:bg-neutral-400 hover:bg-opacity-25  hover:border-opacity-75 transition-all"
        >
          Оставить заявку
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
