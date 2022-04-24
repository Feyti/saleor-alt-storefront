/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LanguageCodeEnum } from "./../../globalTypes";

// ====================================================
// GraphQL query operation: collectionDetailQuery
// ====================================================

export interface collectionDetailQuery_collection_translation {
  __typename: "CollectionTranslation";
  id: string;
  name: string | null;
  seoTitle: string | null;
  seoDescription: string | null;
}

export interface collectionDetailQuery_collection_backgroundImage {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
  /**
   * Alt text for an image.
   */
  alt: string | null;
}

export interface collectionDetailQuery_collection {
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
  translation: collectionDetailQuery_collection_translation | null;
  seoTitle: string | null;
  seoDescription: string | null;
  backgroundImage: collectionDetailQuery_collection_backgroundImage | null;
}

export interface collectionDetailQuery {
  /**
   * Look up a collection by ID.
   */
  collection: collectionDetailQuery_collection | null;
}

export interface collectionDetailQueryVariables {
  collection: string;
  lang: LanguageCodeEnum;
}
