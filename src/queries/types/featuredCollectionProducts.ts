/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LanguageCodeEnum } from "./../../globalTypes";

// ====================================================
// GraphQL query operation: featuredCollectionProducts
// ====================================================

export interface featuredCollectionProducts_collection_translation {
  __typename: "CollectionTranslation";
  id: string;
  name: string | null;
}

export interface featuredCollectionProducts_collection_products_edges_node_thumbnail {
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

export interface featuredCollectionProducts_collection_products_edges_node_images {
  __typename: "ProductImage";
  /**
   * The ID of the image.
   */
  id: string;
  /**
   * The URL of the image.
   */
  url: string;
  /**
   * The alt text of the image.
   */
  alt: string | null;
}

export interface featuredCollectionProducts_collection_products_edges_node_collections_translation {
  __typename: "CollectionTranslation";
  id: string;
  name: string | null;
}

export interface featuredCollectionProducts_collection_products_edges_node_collections {
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
  translation: featuredCollectionProducts_collection_products_edges_node_collections_translation | null;
}

export interface featuredCollectionProducts_collection_products_edges_node_category_translation {
  __typename: "CategoryTranslation";
  id: string;
  name: string | null;
}

export interface featuredCollectionProducts_collection_products_edges_node_category {
  __typename: "Category";
  id: string;
  name: string;
  slug: string;
  level: number;
  /**
   * Returns translated category fields for the given language code.
   */
  translation: featuredCollectionProducts_collection_products_edges_node_category_translation | null;
}

export interface featuredCollectionProducts_collection_products_edges_node_pricing_discount_gross {
  __typename: "Money";
  /**
   * Currency code.
   */
  currency: string;
  /**
   * Amount of money.
   */
  amount: number;
}

export interface featuredCollectionProducts_collection_products_edges_node_pricing_discount {
  __typename: "TaxedMoney";
  /**
   * Currency code.
   */
  currency: string;
  /**
   * Amount of money including taxes.
   */
  gross: featuredCollectionProducts_collection_products_edges_node_pricing_discount_gross;
}

export interface featuredCollectionProducts_collection_products_edges_node_pricing_priceRange_start_gross {
  __typename: "Money";
  /**
   * Currency code.
   */
  currency: string;
  /**
   * Amount of money.
   */
  amount: number;
}

export interface featuredCollectionProducts_collection_products_edges_node_pricing_priceRange_start {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: featuredCollectionProducts_collection_products_edges_node_pricing_priceRange_start_gross;
}

export interface featuredCollectionProducts_collection_products_edges_node_pricing_priceRange_stop_gross {
  __typename: "Money";
  /**
   * Currency code.
   */
  currency: string;
  /**
   * Amount of money.
   */
  amount: number;
}

export interface featuredCollectionProducts_collection_products_edges_node_pricing_priceRange_stop {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: featuredCollectionProducts_collection_products_edges_node_pricing_priceRange_stop_gross;
}

export interface featuredCollectionProducts_collection_products_edges_node_pricing_priceRange {
  __typename: "TaxedMoneyRange";
  /**
   * Lower bound of a price range.
   */
  start: featuredCollectionProducts_collection_products_edges_node_pricing_priceRange_start | null;
  /**
   * Upper bound of a price range.
   */
  stop: featuredCollectionProducts_collection_products_edges_node_pricing_priceRange_stop | null;
}

export interface featuredCollectionProducts_collection_products_edges_node_pricing_priceRangeUndiscounted_start_gross {
  __typename: "Money";
  /**
   * Currency code.
   */
  currency: string;
  /**
   * Amount of money.
   */
  amount: number;
}

export interface featuredCollectionProducts_collection_products_edges_node_pricing_priceRangeUndiscounted_start {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: featuredCollectionProducts_collection_products_edges_node_pricing_priceRangeUndiscounted_start_gross;
}

export interface featuredCollectionProducts_collection_products_edges_node_pricing_priceRangeUndiscounted_stop_gross {
  __typename: "Money";
  /**
   * Currency code.
   */
  currency: string;
  /**
   * Amount of money.
   */
  amount: number;
}

export interface featuredCollectionProducts_collection_products_edges_node_pricing_priceRangeUndiscounted_stop {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: featuredCollectionProducts_collection_products_edges_node_pricing_priceRangeUndiscounted_stop_gross;
}

export interface featuredCollectionProducts_collection_products_edges_node_pricing_priceRangeUndiscounted {
  __typename: "TaxedMoneyRange";
  /**
   * Lower bound of a price range.
   */
  start: featuredCollectionProducts_collection_products_edges_node_pricing_priceRangeUndiscounted_start | null;
  /**
   * Upper bound of a price range.
   */
  stop: featuredCollectionProducts_collection_products_edges_node_pricing_priceRangeUndiscounted_stop | null;
}

export interface featuredCollectionProducts_collection_products_edges_node_pricing {
  __typename: "ProductPricingInfo";
  /**
   * Whether it is in sale or not.
   */
  onSale: boolean | null;
  /**
   * The discount amount if in sale (null otherwise).
   */
  discount: featuredCollectionProducts_collection_products_edges_node_pricing_discount | null;
  /**
   * The discounted price range of the product variants.
   */
  priceRange: featuredCollectionProducts_collection_products_edges_node_pricing_priceRange | null;
  /**
   * The undiscounted price range of the product variants.
   */
  priceRangeUndiscounted: featuredCollectionProducts_collection_products_edges_node_pricing_priceRangeUndiscounted | null;
}

export interface featuredCollectionProducts_collection_products_edges_node_translation {
  __typename: "ProductTranslation";
  id: string;
  name: string | null;
}

export interface featuredCollectionProducts_collection_products_edges_node {
  __typename: "Product";
  id: string;
  name: string;
  slug: string;
  /**
   * The main thumbnail for a product.
   */
  thumbnail: featuredCollectionProducts_collection_products_edges_node_thumbnail | null;
  /**
   * List of images for the product.
   */
  images: (featuredCollectionProducts_collection_products_edges_node_images | null)[] | null;
  /**
   * List of collections for the product.
   */
  collections: (featuredCollectionProducts_collection_products_edges_node_collections | null)[] | null;
  category: featuredCollectionProducts_collection_products_edges_node_category | null;
  /**
   * Lists the storefront product's pricing, the current price and discounts, only meant for displaying.
   */
  pricing: featuredCollectionProducts_collection_products_edges_node_pricing | null;
  /**
   * Returns translated product fields for the given language code.
   */
  translation: featuredCollectionProducts_collection_products_edges_node_translation | null;
}

export interface featuredCollectionProducts_collection_products_edges {
  __typename: "ProductCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: featuredCollectionProducts_collection_products_edges_node;
}

export interface featuredCollectionProducts_collection_products {
  __typename: "ProductCountableConnection";
  edges: featuredCollectionProducts_collection_products_edges[];
}

export interface featuredCollectionProducts_collection {
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
  translation: featuredCollectionProducts_collection_translation | null;
  /**
   * List of products in this collection.
   */
  products: featuredCollectionProducts_collection_products | null;
}

export interface featuredCollectionProducts {
  /**
   * Look up a collection by ID.
   */
  collection: featuredCollectionProducts_collection | null;
}

export interface featuredCollectionProductsVariables {
  slug: string;
  first: number;
  lang: LanguageCodeEnum;
}
