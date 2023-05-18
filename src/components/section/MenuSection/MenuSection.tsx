import { Element } from "react-scroll";

import MenuList from "@/components/Menu/MenuList/MenuList";

import { IAllMenu } from "@/shared/queryGrahpQl/HomeQuerry/homeQueryModels";

import css from "./MenuSection.module.css";

interface IMenuSectionProps {
  menu: IAllMenu;
}

const MenuSection: React.FC<IMenuSectionProps> = ({ menu }) => {
  return (
    <section className={css.menu}>
      <Element name="menu">
        <div className="container mx-auto px-20 ">
          <h2 className="text-center text-5xl text-neutral-300">Menu</h2>

          <MenuList menu={menu} />
        </div>
      </Element>
    </section>
  );
};

export default MenuSection;
