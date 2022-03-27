/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: BasicCategoryDetails
// ====================================================

export interface BasicCategoryDetails_translation {
  __typename: "CategoryTranslation";
  id: string;
  name: string | null;
}

export interface BasicCategoryDetails {
  __typename: "Category";
  id: string;
  name: string;
  slug: string;
  level: number;
  /**
   * Returns translated category fields for the given language code.
   */
  translation: BasicCategoryDetails_translation | null;
}
