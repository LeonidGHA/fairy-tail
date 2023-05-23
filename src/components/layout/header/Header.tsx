import Logo from "@/components/Logo/Logo";
import { Link as ScrollLink, animateScroll as Scroll } from "react-scroll";

const Header = () => {
  return (
    <header
      className={
        "fixed left-0 right-0 top-0 border-b-2  border-rose-600 bg-stone-500 opacity-80 "
      }
    >
      <div
        className={
          "container mx-auto flex items-center px-6 tablet:px-16 desktop:px-20"
        }
      >
        <div className="w-14 tablet:w-20">
          <Logo />
        </div>

        <nav className=" grow font-[Comforter] mobileOnly:ml-5">
          <ul className={" flex justify-center gap-10"}>
            <li className="color-black  flex cursor-pointer py-4 text-lg transition-all duration-300 hover:text-pink-600 tablet:text-2xl desktop:text-3xl">
              <a href="#" onClick={() => Scroll.scrollToTop()}>
                Home
              </a>
            </li>

            <li className="color-black flex cursor-pointer py-4 text-lg transition-all duration-300 hover:text-pink-600 tablet:text-2xl desktop:text-3xl">
              <ScrollLink to="benefits" smooth={true}>
                Benefits
              </ScrollLink>
            </li>

            <li className="color-black  flex cursor-pointer py-4 text-lg transition-all duration-300 hover:text-pink-600 tablet:text-2xl desktop:text-3xl">
              <ScrollLink to="menu" smooth={true}>
                Menu
              </ScrollLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
