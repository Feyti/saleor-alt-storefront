// noinspection GraphQLUnresolvedReference

import { PRODUCT_CARD_FRAGMENT } from "@/fragments/product";
import { gql } from "@apollo/client";

// TODO: use channel specific queries

export const PRODUCTS_QUERY = gql`
  ${PRODUCT_CARD_FRAGMENT}
  query ProductsQuery(
    # $categoryID: ID
    $categoryList: [ID]
    # $collectionID: ID
    $collectionList: [ID]
    $search: String
    $sortBy: ProductOrder
    $attributes: [AttributeInput]
    $priceGte: Float
    $priceLte: Float
    $prodsPerPage: Int!
    $cursor: String
    $lang: LanguageCodeEnum!
  ) {
    minPrice: products(
      filter: { stockAvailability: IN_STOCK, isPublished: true }
      first: 1
      sortBy: { field: PRICE, direction: ASC }
    ) {
      edges {
        node {
          id
          pricing {
            priceRange {
              start {
                gross {
                  currency
                  amount
                }
              }
            }
          }
        }
      }
    }
    maxPrice: products(
      filter: { stockAvailability: IN_STOCK, isPublished: true }
      first: 1
      sortBy: { field: PRICE, direction: DESC }
    ) {
      edges {
        node {
          id
          pricing {
            priceRange {
              start {
                gross {
                  currency
                  amount
                }
              }
            }
          }
        }
      }
    }

    products(
      filter: {
        search: $search
        categories: $categoryList
        collections: $collectionList
        stockAvailability: IN_STOCK
        isPublished: true
        attributes: $attributes
        price: { gte: $priceGte, lte: $priceLte }
      }
      sortBy: $sortBy
      first: $prodsPerPage
      after: $cursor
    ) {
      pageInfo {
        hasNextPage
      }
      edges {
        cursor
        node {
          ...ProductCard
        }
      }
    }
  }
`;
