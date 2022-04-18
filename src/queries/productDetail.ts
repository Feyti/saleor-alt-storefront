import { CATEGORY_BASIC_DETAILS_FRAGMENT } from "@/fragments/category";
import { PRODUCT_CARD_FRAGMENT } from "@/fragments/product";
import { gql } from "@apollo/client";

//TODO:  make the query such that it use chanel specific products

export const PRODUCT_DETAIL_PAGE_QUERY = gql`
  ${PRODUCT_CARD_FRAGMENT}
  ${CATEGORY_BASIC_DETAILS_FRAGMENT}
  query productDetailQuery(
    # $productID: ID
    $productSlug: String
    $lang: LanguageCodeEnum!
  ) {
    product(slug: $productSlug, channel: "default-channel") {
      ...ProductCard
      descriptionJson
      seoTitle
      seoDescription
      isAvailable
      translation(languageCode: $lang) {
        descriptionJson
        seoTitle
        seoDescription
      }
      attributes {
        attribute {
          id
          name
          translation(languageCode: $lang) {
            id
            name
          }
        }
        values {
          id
          name
          translation(languageCode: $lang) {
            id
            name
          }
        }
      }
      variants {
        id
        sku
        name
        images {
          id
          url
          alt
        }
        pricing {
          price {
            gross {
              amount
              currency
            }
          }
        }
        attributes {
          values {
            id
            name
            translation(languageCode: $lang) {
              id
              name
            }
          }
        }
      }
      translation(languageCode: $lang) {
        id
        name
      }
    }
    category {
      ...BasicCategoryDetails
      products(first: 10, channel: "default-channel") {
        edges {
          node {
            ...ProductCard
          }
        }
      }
    }
  }
`;
