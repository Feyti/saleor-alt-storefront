import { COLLECTION_BASIC_DETAILS_FRAGMENT } from "@/fragments/collection";
import { gql } from "@apollo/client";

// TODO: use channel specific queries

export const COLLECTIONS_QUERY = gql`
  ${COLLECTION_BASIC_DETAILS_FRAGMENT}
  query collectionsQuery($lang: LanguageCodeEnum!) {
    collections(first: 100, channel: "default-channel") {
      edges {
        node {
          ...BasicCollectionDetails
        }
      }
    }
  }
`;
