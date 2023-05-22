import PageMenuItem from "../PageMenuItem/PageMenuItem";

import { IMenuProps } from "@/shared/queryGrahpQl/QueryModels";

const PageMenuList: React.FC<IMenuProps> = ({ menu }) => {
  const { allVariantDishes } = menu;
  return (
    <ul className="grid grid-cols-1 gap-5 tablet:grid-cols-3  desktop:grid-cols-4">
      {allVariantDishes.map((menuItem) => {
        return <PageMenuItem key={menuItem.id} menuItem={menuItem} />;
      })}
    </ul>
  );
};

export default PageMenuList;
