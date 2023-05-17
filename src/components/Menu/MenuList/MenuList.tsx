import MenuItem from "../MenuItem/MenuItem";

import { IAllMenu } from "@/shared/queryGrahpQl/HomeQuerry/homeQueryModels";

interface IMenuListProps {
  menu: IAllMenu;
}

const MenuList: React.FC<IMenuListProps> = ({ menu }) => {
  const { allVariantDishes } = menu;

  return (
    <ul className="flex flex-wrap justify-center  p-5 gap-5">
      {allVariantDishes.map((menuItem) => (
        <MenuItem menuItem={menuItem} key={menuItem.id} />
      ))}
    </ul>
  );
};

export default MenuList;
