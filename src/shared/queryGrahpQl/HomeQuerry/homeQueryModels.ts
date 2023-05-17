export interface IAllMenu {
   allVariantDishes: IMenuItem[] 
}

export interface IMenuItem {
  varietyOfDishes: string;
  id: string;
  disheImg: {
      alt:string
      url: string
    }
}

export interface IAllBenefits {
    allBenefitArticles: IBenefitsItem[]
}

export interface IBenefitsItem {
  title: string
  id: string
  description: string
  coverImg: {
    url: string
  }

}