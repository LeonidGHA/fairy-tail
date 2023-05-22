export interface IMenuProps {
  menu: IAllMenu;
}

export interface IAllMenu {
  allVariantDishes: IMenuItem[];
}

export interface IMenuItem {
  varietyOfDishes: string;
  id: string;
  disheImg: {
    alt: string;
    url: string;
    width: number;
  };
}

export interface IAllBenefits {
  allBenefitArticles: IBenefitsItem[];
}

export interface IBenefitsItem {
  title: string;
  id: string;
  description: string;
  coverImg: {
    url: string;
    alt: string;
    width: number;
  };
}

export interface IHomeQueryProps {
  dishes: IAllDishes;
}

export interface IAllDishes extends IAllMenu {
  allDishes: IDish[];
}

export interface IDish {
  discription: string;
  id: string;
  img: {
    url: string;
    width: number;
  };
  price: number;
  title: string;
  weight: number;
  variantDishe: {
    varietyOfDishes: string;
  };
}
