import { gql } from "graphql-request";


export const MENU_QUERY = gql`
{
  allVariantDishes {
    varietyOfDishes
    id
  }
}
`;
export const BG_HERO_QUERY = gql`
 {
  bgImage {
    hero {
      alt
      responsiveImage {
        webpSrcSet
      }
    }
  }
}
`;
export const ALL_DISHES_QUERY = gql`
{
  allDishes {
    id
    price
    title
    weight
    variantDishe {
      varietyOfDishes
    }
    img {
      url
    }
  }
}
`;