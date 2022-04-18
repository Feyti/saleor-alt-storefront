import { CATEGORY_BASIC_DETAILS_FRAGMENT } from "@/fragments/category";
import { PRODUCT_CARD_FRAGMENT } from "@/fragments/product";
import { gql } from "@apollo/client";

// TODO: use channel specific queries

export const FEATURED_CATEGORY_PRODUCTS_QUERY = gql`
  ${CATEGORY_BASIC_DETAILS_FRAGMENT}
  ${PRODUCT_CARD_FRAGMENT}
  query featuredCategoryProducts(
    $lang: LanguageCodeEnum!
    $slug: String!
    $first: Int!
  ) {
    category(slug: $slug) {
      ...BasicCategoryDetails
      products(first: $first, channel: "default-channel") {
        edges {
          node {
            ...ProductCard
          }
        }
      }
    }
  }
`;
