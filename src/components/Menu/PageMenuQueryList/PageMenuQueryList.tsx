import PageMenuQueryItem from "../PageMenuQueryItem/PageMenuQueryItem";

import { IAllDishes } from "@/shared/queryGrahpQl/QueryModels";

const PageMenuQueryList: React.FC<IAllDishes> = ({ allDishes }) => {
  return (
    <ul className="grid grid-cols-1 gap-5 tablet:grid-cols-3  desktop:grid-cols-4">
      {allDishes.map((dish) => {
        return <PageMenuQueryItem key={dish.id} dish={dish} />;
      })}
    </ul>
  );
};

export default PageMenuQueryList;
