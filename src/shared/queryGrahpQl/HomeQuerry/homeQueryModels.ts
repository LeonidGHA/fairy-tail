export interface IAllMenu {
   allArticles: IMenuItem[] 
}

export interface IMenuItem {
  varietyOfDishes: string;
  id: string;
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