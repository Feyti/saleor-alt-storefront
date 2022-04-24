/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ProductCard
// ====================================================

export interface ProductCard_thumbnail {
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

export interface ProductCard_images {
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

export interface ProductCard_collections_translation {
  __typename: "CollectionTranslation";
  id: string;
  name: string | null;
}

export interface ProductCard_collections {
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
  translation: ProductCard_collections_translation | null;
}

export interface ProductCard_category_translation {
  __typename: "CategoryTranslation";
  id: string;
  name: string | null;
}

export interface ProductCard_category {
  __typename: "Category";
  id: string;
  name: string;
  slug: string;
  level: number;
  /**
   * Returns translated category fields for the given language code.
   */
  translation: ProductCard_category_translation | null;
}

export interface ProductCard_pricing_discount_gross {
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

export interface ProductCard_pricing_discount {
  __typename: "TaxedMoney";
  /**
   * Currency code.
   */
  currency: string;
  /**
   * Amount of money including taxes.
   */
  gross: ProductCard_pricing_discount_gross;
}

export interface ProductCard_pricing_priceRange_start_gross {
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

export interface ProductCard_pricing_priceRange_start {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductCard_pricing_priceRange_start_gross;
}

export interface ProductCard_pricing_priceRange_stop_gross {
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

export interface ProductCard_pricing_priceRange_stop {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductCard_pricing_priceRange_stop_gross;
}

export interface ProductCard_pricing_priceRange {
  __typename: "TaxedMoneyRange";
  /**
   * Lower bound of a price range.
   */
  start: ProductCard_pricing_priceRange_start | null;
  /**
   * Upper bound of a price range.
   */
  stop: ProductCard_pricing_priceRange_stop | null;
}

export interface ProductCard_pricing_priceRangeUndiscounted_start_gross {
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

export interface ProductCard_pricing_priceRangeUndiscounted_start {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductCard_pricing_priceRangeUndiscounted_start_gross;
}

export interface ProductCard_pricing_priceRangeUndiscounted_stop_gross {
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

export interface ProductCard_pricing_priceRangeUndiscounted_stop {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductCard_pricing_priceRangeUndiscounted_stop_gross;
}

export interface ProductCard_pricing_priceRangeUndiscounted {
  __typename: "TaxedMoneyRange";
  /**
   * Lower bound of a price range.
   */
  start: ProductCard_pricing_priceRangeUndiscounted_start | null;
  /**
   * Upper bound of a price range.
   */
  stop: ProductCard_pricing_priceRangeUndiscounted_stop | null;
}

export interface ProductCard_pricing {
  __typename: "ProductPricingInfo";
  /**
   * Whether it is in sale or not.
   */
  onSale: boolean | null;
  /**
   * The discount amount if in sale (null otherwise).
   */
  discount: ProductCard_pricing_discount | null;
  /**
   * The discounted price range of the product variants.
   */
  priceRange: ProductCard_pricing_priceRange | null;
  /**
   * The undiscounted price range of the product variants.
   */
  priceRangeUndiscounted: ProductCard_pricing_priceRangeUndiscounted | null;
}

export interface ProductCard_translation {
  __typename: "ProductTranslation";
  id: string;
  name: string | null;
}

export interface ProductCard {
  __typename: "Product";
  id: string;
  name: string;
  slug: string;
  /**
   * The main thumbnail for a product.
   */
  thumbnail: ProductCard_thumbnail | null;
  /**
   * List of images for the product.
   */
  images: (ProductCard_images | null)[] | null;
  /**
   * List of collections for the product.
   */
  collections: (ProductCard_collections | null)[] | null;
  category: ProductCard_category | null;
  /**
   * Lists the storefront product's pricing, the current price and discounts, only meant for displaying.
   */
  pricing: ProductCard_pricing | null;
  /**
   * Returns translated product fields for the given language code.
   */
  translation: ProductCard_translation | null;
}
