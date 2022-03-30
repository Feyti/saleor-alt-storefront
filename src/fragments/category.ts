import { gql } from "@apollo/client";

// TODO: use channel specific queries

export const CATEGORY_BASIC_DETAILS_FRAGMENT = gql`
  fragment BasicCategoryDetails on Category {
    id
    name
    slug
    level
    translation(languageCode: $lang) {
      id
      name
    }
  }
`;
