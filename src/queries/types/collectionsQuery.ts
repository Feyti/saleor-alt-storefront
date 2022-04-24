/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LanguageCodeEnum } from "./../../globalTypes";

// ====================================================
// GraphQL query operation: collectionsQuery
// ====================================================

export interface collectionsQuery_collections_edges_node_translation {
  __typename: "CollectionTranslation";
  id: string;
  name: string | null;
}

export interface collectionsQuery_collections_edges_node {
  __typename: "Collection";
  id: string;
  name: string;
  slug: string;
  /**
   * Channel given to retrieve this collection. Also used by federation gateway to resolve this object in a federated query.
   */
  channel: string | null;
  /**
   * Returns translated collection fields for the given language code.
   */
  translation: collectionsQuery_collections_edges_node_translation | null;
}

export interface collectionsQuery_collections_edges {
  __typename: "CollectionCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: collectionsQuery_collections_edges_node;
}

export interface collectionsQuery_collections {
  __typename: "CollectionCountableConnection";
  edges: collectionsQuery_collections_edges[];
}

export interface collectionsQuery {
  /**
   * List of the shop's collections.
   */
  collections: collectionsQuery_collections | null;
}

export interface collectionsQueryVariables {
  lang: LanguageCodeEnum;
}
