/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AddressInput, CheckoutErrorCode } from "./../../globalTypes";

// ====================================================
// GraphQL mutation operation: CartBillingAddressUpdateMutation
// ====================================================

export interface CartBillingAddressUpdateMutation_checkoutBillingAddressUpdate_checkoutErrors {
  __typename: "CheckoutError";
  /**
   * The error code.
   */
  code: CheckoutErrorCode;
  /**
   * Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.
   */
  field: string | null;
  /**
   * The error message.
   */
  message: string | null;
}

export interface CartBillingAddressUpdateMutation_checkoutBillingAddressUpdate_checkout_shippingMethod_minimumOrderPrice {
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

export interface CartBillingAddressUpdateMutation_checkoutBillingAddressUpdate_checkout_shippingMethod {
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
  minimumOrderPrice: CartBillingAddressUpdateMutation_checkoutBillingAddressUpdate_checkout_shippingMethod_minimumOrderPrice | null;
}

export interface CartBillingAddressUpdateMutation_checkoutBillingAddressUpdate_checkout_shippingPrice_gross {
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

export interface CartBillingAddressUpdateMutation_checkoutBillingAddressUpdate_checkout_shippingPrice {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: CartBillingAddressUpdateMutation_checkoutBillingAddressUpdate_checkout_shippingPrice_gross;
}

export interface CartBillingAddressUpdateMutation_checkoutBillingAddressUpdate_checkout_subtotalPrice_gross {
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

export interface CartBillingAddressUpdateMutation_checkoutBillingAddressUpdate_checkout_subtotalPrice {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: CartBillingAddressUpdateMutation_checkoutBillingAddressUpdate_checkout_subtotalPrice_gross;
}

export interface CartBillingAddressUpdateMutation_checkoutBillingAddressUpdate_checkout_totalPrice_gross {
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

export interface CartBillingAddressUpdateMutation_checkoutBillingAddressUpdate_checkout_totalPrice {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: CartBillingAddressUpdateMutation_checkoutBillingAddressUpdate_checkout_totalPrice_gross;
}

export interface CartBillingAddressUpdateMutation_checkoutBillingAddressUpdate_checkout_discount {
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

export interface CartBillingAddressUpdateMutation_checkoutBillingAddressUpdate_checkout_availableShippingMethods_price {
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

export interface CartBillingAddressUpdateMutation_checkoutBillingAddressUpdate_checkout_availableShippingMethods {
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
  price: CartBillingAddressUpdateMutation_checkoutBillingAddressUpdate_checkout_availableShippingMethods_price;
}

export interface CartBillingAddressUpdateMutation_checkoutBillingAddressUpdate_checkout_shippingAddress_country {
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

export interface CartBillingAddressUpdateMutation_checkoutBillingAddressUpdate_checkout_shippingAddress {
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
  country: CartBillingAddressUpdateMutation_checkoutBillingAddressUpdate_checkout_shippingAddress_country;
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

export interface CartBillingAddressUpdateMutation_checkoutBillingAddressUpdate_checkout_billingAddress_country {
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

export interface CartBillingAddressUpdateMutation_checkoutBillingAddressUpdate_checkout_billingAddress {
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
  country: CartBillingAddressUpdateMutation_checkoutBillingAddressUpdate_checkout_billingAddress_country;
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

export interface CartBillingAddressUpdateMutation_checkoutBillingAddressUpdate_checkout_availablePaymentGateways_config {
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

export interface CartBillingAddressUpdateMutation_checkoutBillingAddressUpdate_checkout_availablePaymentGateways {
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
  config: CartBillingAddressUpdateMutation_checkoutBillingAddressUpdate_checkout_availablePaymentGateways_config[];
}

export interface CartBillingAddressUpdateMutation_checkoutBillingAddressUpdate_checkout_lines {
  __typename: "CheckoutLine";
  id: string;
  quantity: number;
}

export interface CartBillingAddressUpdateMutation_checkoutBillingAddressUpdate_checkout {
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
  shippingMethod: CartBillingAddressUpdateMutation_checkoutBillingAddressUpdate_checkout_shippingMethod | null;
  /**
   * The price of the shipping, with all the taxes included.
   */
  shippingPrice: CartBillingAddressUpdateMutation_checkoutBillingAddressUpdate_checkout_shippingPrice | null;
  /**
   * The price of the checkout before shipping, with taxes included.
   */
  subtotalPrice: CartBillingAddressUpdateMutation_checkoutBillingAddressUpdate_checkout_subtotalPrice | null;
  /**
   * The sum of the the checkout line prices, with all the taxes,shipping costs, and discounts included.
   */
  totalPrice: CartBillingAddressUpdateMutation_checkoutBillingAddressUpdate_checkout_totalPrice | null;
  discount: CartBillingAddressUpdateMutation_checkoutBillingAddressUpdate_checkout_discount | null;
  voucherCode: string | null;
  /**
   * Shipping methods that can be used with this checkout.
   */
  availableShippingMethods: (CartBillingAddressUpdateMutation_checkoutBillingAddressUpdate_checkout_availableShippingMethods | null)[];
  shippingAddress: CartBillingAddressUpdateMutation_checkoutBillingAddressUpdate_checkout_shippingAddress | null;
  billingAddress: CartBillingAddressUpdateMutation_checkoutBillingAddressUpdate_checkout_billingAddress | null;
  /**
   * List of available payment gateways.
   */
  availablePaymentGateways: CartBillingAddressUpdateMutation_checkoutBillingAddressUpdate_checkout_availablePaymentGateways[];
  /**
   * A list of checkout lines, each containing information about an item in the checkout.
   */
  lines: (CartBillingAddressUpdateMutation_checkoutBillingAddressUpdate_checkout_lines | null)[] | null;
}

export interface CartBillingAddressUpdateMutation_checkoutBillingAddressUpdate {
  __typename: "CheckoutBillingAddressUpdate";
  checkoutErrors: CartBillingAddressUpdateMutation_checkoutBillingAddressUpdate_checkoutErrors[];
  /**
   * An updated checkout.
   */
  checkout: CartBillingAddressUpdateMutation_checkoutBillingAddressUpdate_checkout | null;
}

export interface CartBillingAddressUpdateMutation {
  /**
   * Update billing address in the existing checkout.
   */
  checkoutBillingAddressUpdate: CartBillingAddressUpdateMutation_checkoutBillingAddressUpdate | null;
}

export interface CartBillingAddressUpdateMutationVariables {
  checkoutId: string;
  address: AddressInput;
}
