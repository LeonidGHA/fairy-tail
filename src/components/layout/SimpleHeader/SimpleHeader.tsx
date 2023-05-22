import Logo from "@/components/Logo/Logo";

const SimpleHeader = () => {
  return (
    <header className="border-b-2 border-rose-600 bg-stone-500">
      <div className="container mx-auto flex justify-center px-6 tablet:px-16 desktop:px-20">
        <div className="flex items-center justify-center  py-2 ">
          <div className="w-14 tablet:w-20">
            <Logo />
          </div>

          <span className="ml-3 font-[Comforter] text-2xl text-neutral-200 tablet:text-4xl ">
            Fairy tail
          </span>
        </div>
      </div>
    </header>
  );
};

export default SimpleHeader;
