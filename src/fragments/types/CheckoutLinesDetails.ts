/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CheckoutLinesDetails
// ====================================================

export interface CheckoutLinesDetails_lines_variant_images {
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

export interface CheckoutLinesDetails_lines_variant_attributes_attribute_translation {
  __typename: "AttributeTranslation";
  id: string;
  name: string;
}

export interface CheckoutLinesDetails_lines_variant_attributes_attribute {
  __typename: "Attribute";
  id: string;
  /**
   * Name of an attribute displayed in the interface.
   */
  name: string | null;
  /**
   * Returns translated attribute fields for the given language code.
   */
  translation: CheckoutLinesDetails_lines_variant_attributes_attribute_translation | null;
}

export interface CheckoutLinesDetails_lines_variant_attributes_values_translation {
  __typename: "AttributeValueTranslation";
  id: string;
  name: string;
}

export interface CheckoutLinesDetails_lines_variant_attributes_values {
  __typename: "AttributeValue";
  id: string;
  /**
   * Name of a value displayed in the interface.
   */
  name: string | null;
  /**
   * Returns translated attribute value fields for the given language code.
   */
  translation: CheckoutLinesDetails_lines_variant_attributes_values_translation | null;
}

export interface CheckoutLinesDetails_lines_variant_attributes {
  __typename: "SelectedAttribute";
  /**
   * Name of an attribute displayed in the interface.
   */
  attribute: CheckoutLinesDetails_lines_variant_attributes_attribute;
  /**
   * Values of an attribute.
   */
  values: (CheckoutLinesDetails_lines_variant_attributes_values | null)[];
}

export interface CheckoutLinesDetails_lines_variant_pricing_price_gross {
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

export interface CheckoutLinesDetails_lines_variant_pricing_price {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: CheckoutLinesDetails_lines_variant_pricing_price_gross;
}

export interface CheckoutLinesDetails_lines_variant_pricing {
  __typename: "VariantPricingInfo";
  /**
   * The price, with any discount subtracted.
   */
  price: CheckoutLinesDetails_lines_variant_pricing_price | null;
}

export interface CheckoutLinesDetails_lines_variant_translation {
  __typename: "ProductVariantTranslation";
  id: string;
  name: string;
}

export interface CheckoutLinesDetails_lines_variant_product_category_translation {
  __typename: "CategoryTranslation";
  id: string;
  name: string | null;
}

export interface CheckoutLinesDetails_lines_variant_product_category {
  __typename: "Category";
  id: string;
  name: string;
  /**
   * Returns translated category fields for the given language code.
   */
  translation: CheckoutLinesDetails_lines_variant_product_category_translation | null;
}

export interface CheckoutLinesDetails_lines_variant_product_thumbnail {
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

export interface CheckoutLinesDetails_lines_variant_product_translation {
  __typename: "ProductTranslation";
  id: string;
  name: string | null;
  /**
   * Translated description of the product (JSON).
   */
  descriptionJson: any | null;
}

export interface CheckoutLinesDetails_lines_variant_product {
  __typename: "Product";
  id: string;
  slug: string;
  name: string;
  category: CheckoutLinesDetails_lines_variant_product_category | null;
  /**
   * Description of the product (JSON).
   */
  descriptionJson: any | null;
  /**
   * The main thumbnail for a product.
   */
  thumbnail: CheckoutLinesDetails_lines_variant_product_thumbnail | null;
  /**
   * Returns translated product fields for the given language code.
   */
  translation: CheckoutLinesDetails_lines_variant_product_translation | null;
}

export interface CheckoutLinesDetails_lines_variant {
  __typename: "ProductVariant";
  id: string;
  name: string;
  sku: string | null;
  /**
   * Quantity of a product available for sale in one checkout. Field value will be `null` when no `limitQuantityPerCheckout` in global settings has been set, and `productVariant` stocks are not tracked.
   */
  quantityAvailable: number | null;
  /**
   * List of images for the product variant.
   */
  images: (CheckoutLinesDetails_lines_variant_images | null)[] | null;
  /**
   * List of attributes assigned to this variant.
   */
  attributes: CheckoutLinesDetails_lines_variant_attributes[];
  /**
   * Lists the storefront variant's pricing, the current price and discounts, only meant for displaying.
   */
  pricing: CheckoutLinesDetails_lines_variant_pricing | null;
  /**
   * Returns translated product variant fields for the given language code.
   */
  translation: CheckoutLinesDetails_lines_variant_translation | null;
  product: CheckoutLinesDetails_lines_variant_product;
}

export interface CheckoutLinesDetails_lines_totalPrice_gross {
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

export interface CheckoutLinesDetails_lines_totalPrice {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: CheckoutLinesDetails_lines_totalPrice_gross;
}

export interface CheckoutLinesDetails_lines {
  __typename: "CheckoutLine";
  id: string;
  variant: CheckoutLinesDetails_lines_variant;
  quantity: number;
  /**
   * The sum of the checkout line price, taxes and discounts.
   */
  totalPrice: CheckoutLinesDetails_lines_totalPrice | null;
}

export interface CheckoutLinesDetails {
  __typename: "Checkout";
  /**
   * A list of checkout lines, each containing information about an item in the checkout.
   */
  lines: (CheckoutLinesDetails_lines | null)[] | null;
}
