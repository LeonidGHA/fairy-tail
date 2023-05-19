import Logo from "@/components/Logo/Logo";
import { Link as ScrollLink, animateScroll as Scroll } from "react-scroll";

const Header = () => {
  return (
    <header
      className={
        "bg-stone-500 opacity-80 border-b-2 border-rose-600 fixed  top-0 left-0 right-0 "
      }
    >
      <div className={"container mx-auto px-20 flex items-center"}>
        <Logo />
        <nav className="grow">
          <ul className={" flex gap-10 justify-center"}>
            <li className="flex transition-all py-4 color-black hover:text-pink-600 duration-300">
              <a onClick={() => Scroll.scrollToTop()}>Home</a>
            </li>

            <li className="flex transition-all py-4 color-black hover:text-pink-600 duration-300">
              <ScrollLink to="benefits" smooth={true}>
                Benefits
              </ScrollLink>
            </li>

            <li className="flex transition-all py-4 color-black hover:text-pink-600 duration-300">
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
