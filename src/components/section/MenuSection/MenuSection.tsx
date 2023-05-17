import MenuList from "@/components/Menu/MenuList/MenuList";

import { IAllMenu } from "@/shared/queryGrahpQl/HomeQuerry/homeQueryModels";

interface IMenuSectionProps {
  menu: IAllMenu;
}

const MenuSection: React.FC<IMenuSectionProps> = ({ menu }) => {
  return (
    <section className=" py-10 ">
      <div className="container mx-auto px-20 flex flex-col items-center">
        <h2 className="hidden">Menu</h2>
        <p>Menu</p>
        <MenuList menu={menu} />
      </div>
    </section>
  );
};

export default MenuSection;
