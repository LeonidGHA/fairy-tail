export interface IAllMenu {
  menu?: { allArticles: IMenuItem[] };
}

export interface IMenuItem {
  varietyOfDishes: string;
  id: string;
}

export interface IBgImage {
 
    bgImage: {
      hero: {
        alt: string;
        responsiveImage: {
          webpSrcSet: string;
        };
      };
    };

}
