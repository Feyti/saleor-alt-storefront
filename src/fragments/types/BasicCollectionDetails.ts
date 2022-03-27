/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: BasicCollectionDetails
// ====================================================

export interface BasicCollectionDetails_translation {
  __typename: "CollectionTranslation";
  id: string;
  name: string | null;
}

export interface BasicCollectionDetails {
  __typename: "Collection";
  id: string;
  name: string;
  slug: string;
  /**
   * Returns translated collection fields for the given language code.
   */
  translation: BasicCollectionDetails_translation | null;
}
