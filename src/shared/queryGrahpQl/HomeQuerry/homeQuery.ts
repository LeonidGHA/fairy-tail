import { gql } from "graphql-request";

export const MENU_QUERY = gql`
 {
  allVariantDishes {
    id
    varietyOfDishes
    disheImg {
      alt
      url
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
      }
    }
  }
`;

// export const ALL_DISHES_QUERY = gql`
//   {
//     allDishes {
//       id
//       price
//       title
//       weight
//       variantDishe {
//         varietyOfDishes
//       }
//       img {
//         url
//       }
//     }
//   }
// `;

