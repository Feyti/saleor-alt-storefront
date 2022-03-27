/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LanguageCodeEnum } from "./../../globalTypes";

// ====================================================
// GraphQL query operation: cartQuery
// ====================================================

export interface cartQuery_me_addresses_country {
  __typename: "CountryDisplay";
  /**
   * Country code.
   */
  code: string;
  /**
   * Country name.
   */
  country: string;
}

export interface cartQuery_me_addresses {
  __typename: "Address";
  id: string;
  firstName: string;
  lastName: string;
  companyName: string;
  streetAddress1: string;
  streetAddress2: string;
  city: string;
  cityArea: string;
  postalCode: string;
  /**
   * Shop's default country.
   */
  country: cartQuery_me_addresses_country;
  countryArea: string;
  phone: string | null;
  /**
   * Address is user's default shipping address.
   */
  isDefaultShippingAddress: boolean | null;
  /**
   * Address is user's default billing address.
   */
  isDefaultBillingAddress: boolean | null;
}

export interface cartQuery_me_checkout_shippingMethod_minimumOrderPrice {
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

export interface cartQuery_me_checkout_shippingMethod {
  __typename: "ShippingMethod";
  /**
   * Unique ID of ShippingMethod available for Order.
   */
  id: string;
  /**
   * Shipping method name.
   */
  name: string;
  /**
   * Minimal order price for this shipping method.
   */
  minimumOrderPrice: cartQuery_me_checkout_shippingMethod_minimumOrderPrice | null;
}

export interface cartQuery_me_checkout_shippingPrice_gross {
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

export interface cartQuery_me_checkout_shippingPrice {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: cartQuery_me_checkout_shippingPrice_gross;
}

export interface cartQuery_me_checkout_subtotalPrice_gross {
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

export interface cartQuery_me_checkout_subtotalPrice {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: cartQuery_me_checkout_subtotalPrice_gross;
}

export interface cartQuery_me_checkout_totalPrice_gross {
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

export interface cartQuery_me_checkout_totalPrice {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: cartQuery_me_checkout_totalPrice_gross;
}

export interface cartQuery_me_checkout_discount {
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

export interface cartQuery_me_checkout_availableShippingMethods_price {
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

export interface cartQuery_me_checkout_availableShippingMethods {
  __typename: "ShippingMethod";
  /**
   * Unique ID of ShippingMethod available for Order.
   */
  id: string;
  /**
   * Shipping method name.
   */
  name: string;
  /**
   * The price of selected shipping method.
   */
  price: cartQuery_me_checkout_availableShippingMethods_price;
}

export interface cartQuery_me_checkout_shippingAddress_country {
  __typename: "CountryDisplay";
  /**
   * Country code.
   */
  code: string;
  /**
   * Country name.
   */
  country: string;
}

export interface cartQuery_me_checkout_shippingAddress {
  __typename: "Address";
  id: string;
  firstName: string;
  lastName: string;
  companyName: string;
  streetAddress1: string;
  streetAddress2: string;
  city: string;
  cityArea: string;
  postalCode: string;
  /**
   * Shop's default country.
   */
  country: cartQuery_me_checkout_shippingAddress_country;
  countryArea: string;
  phone: string | null;
  /**
   * Address is user's default shipping address.
   */
  isDefaultShippingAddress: boolean | null;
  /**
   * Address is user's default billing address.
   */
  isDefaultBillingAddress: boolean | null;
}

export interface cartQuery_me_checkout_billingAddress_country {
  __typename: "CountryDisplay";
  /**
   * Country code.
   */
  code: string;
  /**
   * Country name.
   */
  country: string;
}

export interface cartQuery_me_checkout_billingAddress {
  __typename: "Address";
  id: string;
  firstName: string;
  lastName: string;
  companyName: string;
  streetAddress1: string;
  streetAddress2: string;
  city: string;
  cityArea: string;
  postalCode: string;
  /**
   * Shop's default country.
   */
  country: cartQuery_me_checkout_billingAddress_country;
  countryArea: string;
  phone: string | null;
  /**
   * Address is user's default shipping address.
   */
  isDefaultShippingAddress: boolean | null;
  /**
   * Address is user's default billing address.
   */
  isDefaultBillingAddress: boolean | null;
}

export interface cartQuery_me_checkout_availablePaymentGateways_config {
  __typename: "GatewayConfigLine";
  /**
   * Gateway config key.
   */
  field: string;
  /**
   * Gateway config value for key.
   */
  value: string | null;
}

export interface cartQuery_me_checkout_availablePaymentGateways {
  __typename: "PaymentGateway";
  /**
   * Payment gateway ID.
   */
  id: string;
  /**
   * Payment gateway name.
   */
  name: string;
  /**
   * Payment gateway client configuration.
   */
  config: cartQuery_me_checkout_availablePaymentGateways_config[];
}

export interface cartQuery_me_checkout_lines_variant_images {
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

export interface cartQuery_me_checkout_lines_variant_attributes_attribute_translation {
  __typename: "AttributeTranslation";
  id: string;
  name: string;
}

export interface cartQuery_me_checkout_lines_variant_attributes_attribute {
  __typename: "Attribute";
  id: string;
  /**
   * Name of an attribute displayed in the interface.
   */
  name: string | null;
  /**
   * Returns translated attribute fields for the given language code.
   */
  translation: cartQuery_me_checkout_lines_variant_attributes_attribute_translation | null;
}

export interface cartQuery_me_checkout_lines_variant_attributes_values_translation {
  __typename: "AttributeValueTranslation";
  id: string;
  name: string;
}

export interface cartQuery_me_checkout_lines_variant_attributes_values {
  __typename: "AttributeValue";
  id: string;
  /**
   * Name of a value displayed in the interface.
   */
  name: string | null;
  /**
   * Returns translated attribute value fields for the given language code.
   */
  translation: cartQuery_me_checkout_lines_variant_attributes_values_translation | null;
}

export interface cartQuery_me_checkout_lines_variant_attributes {
  __typename: "SelectedAttribute";
  /**
   * Name of an attribute displayed in the interface.
   */
  attribute: cartQuery_me_checkout_lines_variant_attributes_attribute;
  /**
   * Values of an attribute.
   */
  values: (cartQuery_me_checkout_lines_variant_attributes_values | null)[];
}

export interface cartQuery_me_checkout_lines_variant_pricing_price_gross {
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

export interface cartQuery_me_checkout_lines_variant_pricing_price {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: cartQuery_me_checkout_lines_variant_pricing_price_gross;
}

export interface cartQuery_me_checkout_lines_variant_pricing {
  __typename: "VariantPricingInfo";
  /**
   * The price, with any discount subtracted.
   */
  price: cartQuery_me_checkout_lines_variant_pricing_price | null;
}

export interface cartQuery_me_checkout_lines_variant_translation {
  __typename: "ProductVariantTranslation";
  id: string;
  name: string;
}

export interface cartQuery_me_checkout_lines_variant_product_category_translation {
  __typename: "CategoryTranslation";
  id: string;
  name: string | null;
}

export interface cartQuery_me_checkout_lines_variant_product_category {
  __typename: "Category";
  id: string;
  name: string;
  /**
   * Returns translated category fields for the given language code.
   */
  translation: cartQuery_me_checkout_lines_variant_product_category_translation | null;
}

export interface cartQuery_me_checkout_lines_variant_product_thumbnail {
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

export interface cartQuery_me_checkout_lines_variant_product_translation {
  __typename: "ProductTranslation";
  id: string;
  name: string | null;
  /**
   * Translated description of the product (JSON).
   */
  descriptionJson: any | null;
}

export interface cartQuery_me_checkout_lines_variant_product {
  __typename: "Product";
  id: string;
  slug: string;
  name: string;
  category: cartQuery_me_checkout_lines_variant_product_category | null;
  /**
   * Description of the product (JSON).
   */
  descriptionJson: any | null;
  /**
   * The main thumbnail for a product.
   */
  thumbnail: cartQuery_me_checkout_lines_variant_product_thumbnail | null;
  /**
   * Returns translated product fields for the given language code.
   */
  translation: cartQuery_me_checkout_lines_variant_product_translation | null;
}

export interface cartQuery_me_checkout_lines_variant {
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
  images: (cartQuery_me_checkout_lines_variant_images | null)[] | null;
  /**
   * List of attributes assigned to this variant.
   */
  attributes: cartQuery_me_checkout_lines_variant_attributes[];
  /**
   * Lists the storefront variant's pricing, the current price and discounts, only meant for displaying.
   */
  pricing: cartQuery_me_checkout_lines_variant_pricing | null;
  /**
   * Returns translated product variant fields for the given language code.
   */
  translation: cartQuery_me_checkout_lines_variant_translation | null;
  product: cartQuery_me_checkout_lines_variant_product;
}

export interface cartQuery_me_checkout_lines_totalPrice_gross {
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

export interface cartQuery_me_checkout_lines_totalPrice {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: cartQuery_me_checkout_lines_totalPrice_gross;
}

export interface cartQuery_me_checkout_lines {
  __typename: "CheckoutLine";
  id: string;
  variant: cartQuery_me_checkout_lines_variant;
  quantity: number;
  /**
   * The sum of the checkout line price, taxes and discounts.
   */
  totalPrice: cartQuery_me_checkout_lines_totalPrice | null;
}

export interface cartQuery_me_checkout {
  __typename: "Checkout";
  id: string;
  /**
   * The checkout's token.
   */
  token: any;
  /**
   * Email of a customer.
   */
  email: string | null;
  /**
   * The shipping method related with checkout.
   */
  shippingMethod: cartQuery_me_checkout_shippingMethod | null;
  /**
   * The price of the shipping, with all the taxes included.
   */
  shippingPrice: cartQuery_me_checkout_shippingPrice | null;
  /**
   * The price of the checkout before shipping, with taxes included.
   */
  subtotalPrice: cartQuery_me_checkout_subtotalPrice | null;
  /**
   * The sum of the the checkout line prices, with all the taxes,shipping costs, and discounts included.
   */
  totalPrice: cartQuery_me_checkout_totalPrice | null;
  discount: cartQuery_me_checkout_discount | null;
  voucherCode: string | null;
  /**
   * Shipping methods that can be used with this checkout.
   */
  availableShippingMethods: (cartQuery_me_checkout_availableShippingMethods | null)[];
  shippingAddress: cartQuery_me_checkout_shippingAddress | null;
  billingAddress: cartQuery_me_checkout_billingAddress | null;
  /**
   * List of available payment gateways.
   */
  availablePaymentGateways: cartQuery_me_checkout_availablePaymentGateways[];
  /**
   * A list of checkout lines, each containing information about an item in the checkout.
   */
  lines: (cartQuery_me_checkout_lines | null)[] | null;
}

export interface cartQuery_me {
  __typename: "User";
  id: string;
  /**
   * List of all user's addresses.
   */
  addresses: (cartQuery_me_addresses | null)[] | null;
  /**
   * Returns the last open checkout of this user.
   */
  checkout: cartQuery_me_checkout | null;
}

export interface cartQuery {
  /**
   * Return the currently authenticated user.
   */
  me: cartQuery_me | null;
}

export interface cartQueryVariables {
  lang: LanguageCodeEnum;
}
