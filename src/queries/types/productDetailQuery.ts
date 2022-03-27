/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LanguageCodeEnum } from "./../../globalTypes";

// ====================================================
// GraphQL query operation: productDetailQuery
// ====================================================

export interface productDetailQuery_product_thumbnail {
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

export interface productDetailQuery_product_images {
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

export interface productDetailQuery_product_collections_translation {
  __typename: "CollectionTranslation";
  id: string;
  name: string | null;
}

export interface productDetailQuery_product_collections {
  __typename: "Collection";
  id: string;
  name: string;
  slug: string;
  /**
   * Returns translated collection fields for the given language code.
   */
  translation: productDetailQuery_product_collections_translation | null;
}

export interface productDetailQuery_product_category_translation {
  __typename: "CategoryTranslation";
  id: string;
  name: string | null;
}

export interface productDetailQuery_product_category {
  __typename: "Category";
  id: string;
  name: string;
  slug: string;
  level: number;
  /**
   * Returns translated category fields for the given language code.
   */
  translation: productDetailQuery_product_category_translation | null;
}

export interface productDetailQuery_product_pricing_discount_gross {
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

export interface productDetailQuery_product_pricing_discount {
  __typename: "TaxedMoney";
  /**
   * Currency code.
   */
  currency: string;
  /**
   * Amount of money including taxes.
   */
  gross: productDetailQuery_product_pricing_discount_gross;
}

export interface productDetailQuery_product_pricing_priceRange_start_gross {
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

export interface productDetailQuery_product_pricing_priceRange_start {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: productDetailQuery_product_pricing_priceRange_start_gross;
}

export interface productDetailQuery_product_pricing_priceRange_stop_gross {
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

export interface productDetailQuery_product_pricing_priceRange_stop {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: productDetailQuery_product_pricing_priceRange_stop_gross;
}

export interface productDetailQuery_product_pricing_priceRange {
  __typename: "TaxedMoneyRange";
  /**
   * Lower bound of a price range.
   */
  start: productDetailQuery_product_pricing_priceRange_start | null;
  /**
   * Upper bound of a price range.
   */
  stop: productDetailQuery_product_pricing_priceRange_stop | null;
}

export interface productDetailQuery_product_pricing_priceRangeUndiscounted_start_gross {
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

export interface productDetailQuery_product_pricing_priceRangeUndiscounted_start {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: productDetailQuery_product_pricing_priceRangeUndiscounted_start_gross;
}

export interface productDetailQuery_product_pricing_priceRangeUndiscounted_stop_gross {
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

export interface productDetailQuery_product_pricing_priceRangeUndiscounted_stop {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: productDetailQuery_product_pricing_priceRangeUndiscounted_stop_gross;
}

export interface productDetailQuery_product_pricing_priceRangeUndiscounted {
  __typename: "TaxedMoneyRange";
  /**
   * Lower bound of a price range.
   */
  start: productDetailQuery_product_pricing_priceRangeUndiscounted_start | null;
  /**
   * Upper bound of a price range.
   */
  stop: productDetailQuery_product_pricing_priceRangeUndiscounted_stop | null;
}

export interface productDetailQuery_product_pricing {
  __typename: "ProductPricingInfo";
  /**
   * Whether it is in sale or not.
   */
  onSale: boolean | null;
  /**
   * The discount amount if in sale (null otherwise).
   */
  discount: productDetailQuery_product_pricing_discount | null;
  /**
   * The discounted price range of the product variants.
   */
  priceRange: productDetailQuery_product_pricing_priceRange | null;
  /**
   * The undiscounted price range of the product variants.
   */
  priceRangeUndiscounted: productDetailQuery_product_pricing_priceRangeUndiscounted | null;
}

export interface productDetailQuery_product_translation {
  __typename: "ProductTranslation";
  id: string;
  name: string | null;
  /**
   * Translated description of the product (JSON).
   */
  descriptionJson: any | null;
  seoTitle: string | null;
  seoDescription: string | null;
}

export interface productDetailQuery_product_attributes_attribute_translation {
  __typename: "AttributeTranslation";
  id: string;
  name: string;
}

export interface productDetailQuery_product_attributes_attribute {
  __typename: "Attribute";
  id: string;
  /**
   * Name of an attribute displayed in the interface.
   */
  name: string | null;
  /**
   * Returns translated attribute fields for the given language code.
   */
  translation: productDetailQuery_product_attributes_attribute_translation | null;
}

export interface productDetailQuery_product_attributes_values_translation {
  __typename: "AttributeValueTranslation";
  id: string;
  name: string;
}

export interface productDetailQuery_product_attributes_values {
  __typename: "AttributeValue";
  id: string;
  /**
   * Name of a value displayed in the interface.
   */
  name: string | null;
  /**
   * Returns translated attribute value fields for the given language code.
   */
  translation: productDetailQuery_product_attributes_values_translation | null;
}

export interface productDetailQuery_product_attributes {
  __typename: "SelectedAttribute";
  /**
   * Name of an attribute displayed in the interface.
   */
  attribute: productDetailQuery_product_attributes_attribute;
  /**
   * Values of an attribute.
   */
  values: (productDetailQuery_product_attributes_values | null)[];
}

export interface productDetailQuery_product_variants_images {
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

export interface productDetailQuery_product_variants_pricing_price_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface productDetailQuery_product_variants_pricing_price {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: productDetailQuery_product_variants_pricing_price_gross;
}

export interface productDetailQuery_product_variants_pricing {
  __typename: "VariantPricingInfo";
  /**
   * The price, with any discount subtracted.
   */
  price: productDetailQuery_product_variants_pricing_price | null;
}

export interface productDetailQuery_product_variants_attributes_values_translation {
  __typename: "AttributeValueTranslation";
  id: string;
  name: string;
}

export interface productDetailQuery_product_variants_attributes_values {
  __typename: "AttributeValue";
  id: string;
  /**
   * Name of a value displayed in the interface.
   */
  name: string | null;
  /**
   * Returns translated attribute value fields for the given language code.
   */
  translation: productDetailQuery_product_variants_attributes_values_translation | null;
}

export interface productDetailQuery_product_variants_attributes {
  __typename: "SelectedAttribute";
  /**
   * Values of an attribute.
   */
  values: (productDetailQuery_product_variants_attributes_values | null)[];
}

export interface productDetailQuery_product_variants {
  __typename: "ProductVariant";
  id: string;
  sku: string | null;
  name: string;
  /**
   * List of images for the product variant.
   */
  images: (productDetailQuery_product_variants_images | null)[] | null;
  /**
   * Lists the storefront variant's pricing, the current price and discounts, only meant for displaying.
   */
  pricing: productDetailQuery_product_variants_pricing | null;
  /**
   * List of attributes assigned to this variant.
   */
  attributes: productDetailQuery_product_variants_attributes[];
}

export interface productDetailQuery_product {
  __typename: "Product";
  id: string;
  name: string;
  slug: string;
  /**
   * The main thumbnail for a product.
   */
  thumbnail: productDetailQuery_product_thumbnail | null;
  /**
   * List of images for the product.
   */
  images: (productDetailQuery_product_images | null)[] | null;
  /**
   * List of collections for the product.
   */
  collections: (productDetailQuery_product_collections | null)[] | null;
  category: productDetailQuery_product_category | null;
  /**
   * Lists the storefront product's pricing, the current price and discounts, only meant for displaying.
   */
  pricing: productDetailQuery_product_pricing | null;
  /**
   * Returns translated product fields for the given language code.
   */
  translation: productDetailQuery_product_translation | null;
  /**
   * Description of the product (JSON).
   */
  descriptionJson: any | null;
  seoTitle: string | null;
  seoDescription: string | null;
  /**
   * Whether the product is in stock and visible or not.
   */
  isAvailable: boolean | null;
  /**
   * List of attributes assigned to this product.
   */
  attributes: productDetailQuery_product_attributes[];
  /**
   * List of variants for the product.
   */
  variants: (productDetailQuery_product_variants | null)[] | null;
}

export interface productDetailQuery_category_translation {
  __typename: "CategoryTranslation";
  id: string;
  name: string | null;
}

export interface productDetailQuery_category_products_edges_node_thumbnail {
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

export interface productDetailQuery_category_products_edges_node_images {
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

export interface productDetailQuery_category_products_edges_node_collections_translation {
  __typename: "CollectionTranslation";
  id: string;
  name: string | null;
}

export interface productDetailQuery_category_products_edges_node_collections {
  __typename: "Collection";
  id: string;
  name: string;
  slug: string;
  /**
   * Returns translated collection fields for the given language code.
   */
  translation: productDetailQuery_category_products_edges_node_collections_translation | null;
}

export interface productDetailQuery_category_products_edges_node_category_translation {
  __typename: "CategoryTranslation";
  id: string;
  name: string | null;
}

export interface productDetailQuery_category_products_edges_node_category {
  __typename: "Category";
  id: string;
  name: string;
  slug: string;
  level: number;
  /**
   * Returns translated category fields for the given language code.
   */
  translation: productDetailQuery_category_products_edges_node_category_translation | null;
}

export interface productDetailQuery_category_products_edges_node_pricing_discount_gross {
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

export interface productDetailQuery_category_products_edges_node_pricing_discount {
  __typename: "TaxedMoney";
  /**
   * Currency code.
   */
  currency: string;
  /**
   * Amount of money including taxes.
   */
  gross: productDetailQuery_category_products_edges_node_pricing_discount_gross;
}

export interface productDetailQuery_category_products_edges_node_pricing_priceRange_start_gross {
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

export interface productDetailQuery_category_products_edges_node_pricing_priceRange_start {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: productDetailQuery_category_products_edges_node_pricing_priceRange_start_gross;
}

export interface productDetailQuery_category_products_edges_node_pricing_priceRange_stop_gross {
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

export interface productDetailQuery_category_products_edges_node_pricing_priceRange_stop {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: productDetailQuery_category_products_edges_node_pricing_priceRange_stop_gross;
}

export interface productDetailQuery_category_products_edges_node_pricing_priceRange {
  __typename: "TaxedMoneyRange";
  /**
   * Lower bound of a price range.
   */
  start: productDetailQuery_category_products_edges_node_pricing_priceRange_start | null;
  /**
   * Upper bound of a price range.
   */
  stop: productDetailQuery_category_products_edges_node_pricing_priceRange_stop | null;
}

export interface productDetailQuery_category_products_edges_node_pricing_priceRangeUndiscounted_start_gross {
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

export interface productDetailQuery_category_products_edges_node_pricing_priceRangeUndiscounted_start {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: productDetailQuery_category_products_edges_node_pricing_priceRangeUndiscounted_start_gross;
}

export interface productDetailQuery_category_products_edges_node_pricing_priceRangeUndiscounted_stop_gross {
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

export interface productDetailQuery_category_products_edges_node_pricing_priceRangeUndiscounted_stop {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: productDetailQuery_category_products_edges_node_pricing_priceRangeUndiscounted_stop_gross;
}

export interface productDetailQuery_category_products_edges_node_pricing_priceRangeUndiscounted {
  __typename: "TaxedMoneyRange";
  /**
   * Lower bound of a price range.
   */
  start: productDetailQuery_category_products_edges_node_pricing_priceRangeUndiscounted_start | null;
  /**
   * Upper bound of a price range.
   */
  stop: productDetailQuery_category_products_edges_node_pricing_priceRangeUndiscounted_stop | null;
}

export interface productDetailQuery_category_products_edges_node_pricing {
  __typename: "ProductPricingInfo";
  /**
   * Whether it is in sale or not.
   */
  onSale: boolean | null;
  /**
   * The discount amount if in sale (null otherwise).
   */
  discount: productDetailQuery_category_products_edges_node_pricing_discount | null;
  /**
   * The discounted price range of the product variants.
   */
  priceRange: productDetailQuery_category_products_edges_node_pricing_priceRange | null;
  /**
   * The undiscounted price range of the product variants.
   */
  priceRangeUndiscounted: productDetailQuery_category_products_edges_node_pricing_priceRangeUndiscounted | null;
}

export interface productDetailQuery_category_products_edges_node_translation {
  __typename: "ProductTranslation";
  id: string;
  name: string | null;
}

export interface productDetailQuery_category_products_edges_node {
  __typename: "Product";
  id: string;
  name: string;
  slug: string;
  /**
   * The main thumbnail for a product.
   */
  thumbnail: productDetailQuery_category_products_edges_node_thumbnail | null;
  /**
   * List of images for the product.
   */
  images: (productDetailQuery_category_products_edges_node_images | null)[] | null;
  /**
   * List of collections for the product.
   */
  collections: (productDetailQuery_category_products_edges_node_collections | null)[] | null;
  category: productDetailQuery_category_products_edges_node_category | null;
  /**
   * Lists the storefront product's pricing, the current price and discounts, only meant for displaying.
   */
  pricing: productDetailQuery_category_products_edges_node_pricing | null;
  /**
   * Returns translated product fields for the given language code.
   */
  translation: productDetailQuery_category_products_edges_node_translation | null;
}

export interface productDetailQuery_category_products_edges {
  __typename: "ProductCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: productDetailQuery_category_products_edges_node;
}

export interface productDetailQuery_category_products {
  __typename: "ProductCountableConnection";
  edges: productDetailQuery_category_products_edges[];
}

export interface productDetailQuery_category {
  __typename: "Category";
  id: string;
  name: string;
  slug: string;
  level: number;
  /**
   * Returns translated category fields for the given language code.
   */
  translation: productDetailQuery_category_translation | null;
  /**
   * List of products in the category.
   */
  products: productDetailQuery_category_products | null;
}

export interface productDetailQuery {
  /**
   * Look up a product by ID.
   */
  product: productDetailQuery_product | null;
  /**
   * Look up a category by ID or slug.
   */
  category: productDetailQuery_category | null;
}

export interface productDetailQueryVariables {
  productID?: string | null;
  productSlug?: string | null;
  lang: LanguageCodeEnum;
}
