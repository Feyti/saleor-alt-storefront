/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LanguageCodeEnum } from "./../../globalTypes";

// ====================================================
// GraphQL query operation: pageQuery
// ====================================================

export interface pageQuery_page_translation {
  __typename: "PageTranslation";
  id: string;
  title: string | null;
  /**
   * Translated description of the page (JSON).
   */
  contentJson: any | null;
  seoTitle: string | null;
  seoDescription: string | null;
}

export interface pageQuery_page {
  __typename: "Page";
  id: string;
  title: string;
  /**
   * Content of the page (JSON).
   */
  contentJson: any;
  seoTitle: string | null;
  seoDescription: string | null;
  /**
   * Returns translated page fields for the given language code.
   */
  translation: pageQuery_page_translation | null;
}

export interface pageQuery {
  /**
   * Look up a page by ID or slug.
   */
  page: pageQuery_page | null;
}

export interface pageQueryVariables {
  slug: string;
  lang: LanguageCodeEnum;
}
