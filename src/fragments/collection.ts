import { gql } from "@apollo/client";
// TODO: use channel specific queries

export const COLLECTION_BASIC_DETAILS_FRAGMENT = gql`
  fragment BasicCollectionDetails on Collection {
    id
    name
    slug
    translation(languageCode: $lang) {
      id
      name
    }
  }
`;
