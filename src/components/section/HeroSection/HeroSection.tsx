import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="mt-10 py-10 ">
      <div className="container mx-auto px-20 flex flex-col items-center">
        <h1>Добро пожаловать к нам!</h1>
        <Link href="/contact" className="text-center">
          <button
            className="p-2 bg-transparent rounded-lg border-red-600 border-2 hover:bg-red-500 hover:border-emerald-600 transition-all"
            type="button"
          >
            Оставить заявку
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
