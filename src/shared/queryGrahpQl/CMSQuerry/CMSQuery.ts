import { gql } from "graphql-request";

export const MENU_QUERY = gql`
  {
    allVariantDishes {
      id
      varietyOfDishes
      disheImg {
        alt
        url
        width
      }
    }
  }
`;

export const ALL_BENEFITS = gql`
  {
    allBenefitArticles {
      title
      id
      description
      coverImg {
        url
        width
        alt
      }
    }
  }
`;

export const ALL_DISHES_QUERY = gql`
  query MyQuery($ItemId: ItemId) {
    allDishes(filter: { variantDishe: { eq: $ItemId } }) {
      id
      price
      title
      weight
      discription
      img {
        url
        width
      }
      variantDishe {
        varietyOfDishes
      }
    }
    allVariantDishes(filter: { id: { eq: "114555990" } }) {
      varietyOfDishes
    }
  }
`;
