import { Element } from "react-scroll";

import SectionMenuList from "@/components/Menu/SectionMenuList/SectionMenuList";

import { IAllMenu } from "@/shared/queryGrahpQl/QueryModels";

import css from "./MenuSection.module.css";

interface IMenuSectionProps {
  menu: IAllMenu;
}

const MenuSection: React.FC<IMenuSectionProps> = ({ menu }) => {
  return (
    <section className={css.menu}>
      <Element name="menu">
        <div className="container mx-auto px-6 tablet:px-16 desktop:px-20 ">
          <h2 className="mb-10 text-center font-[Comforter] text-5xl text-neutral-300">
            Наше меню
          </h2>

          <SectionMenuList menu={menu} />
        </div>
      </Element>
    </section>
  );
};

export default MenuSection;
