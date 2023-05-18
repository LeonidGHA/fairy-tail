import { Element } from "react-scroll";

import MenuList from "@/components/Menu/MenuList/MenuList";

import { IAllMenu } from "@/shared/queryGrahpQl/HomeQuerry/homeQueryModels";

interface IMenuSectionProps {
  menu: IAllMenu;
}

const MenuSection: React.FC<IMenuSectionProps> = ({ menu }) => {
  return (
    <section className=" py-10 ">
      <Element name="menu">
        <div className="container mx-auto px-20 flex flex-col items-center">
          <h2 className="hidden">Menu</h2>
          <p>Menu</p>
          <MenuList menu={menu} />
        </div>
      </Element>
    </section>
  );
};

export default MenuSection;
