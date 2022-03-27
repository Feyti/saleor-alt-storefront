/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AccountErrorCode } from "./../../globalTypes";

// ====================================================
// GraphQL mutation operation: UserConfirmEmailChangeMutation
// ====================================================

export interface UserConfirmEmailChangeMutation_confirmEmailChange_accountErrors {
  __typename: "AccountError";
  /**
   * The error code.
   */
  code: AccountErrorCode;
  /**
   * Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.
   */
  field: string | null;
  /**
   * The error message.
   */
  message: string | null;
}

export interface UserConfirmEmailChangeMutation_confirmEmailChange_user_metadata {
  __typename: "MetadataItem";
  /**
   * Key of a metadata item.
   */
  key: string;
  /**
   * Value of a metadata item.
   */
  value: string;
}

export interface UserConfirmEmailChangeMutation_confirmEmailChange_user_addresses_country {
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

export interface UserConfirmEmailChangeMutation_confirmEmailChange_user_addresses {
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
  country: UserConfirmEmailChangeMutation_confirmEmailChange_user_addresses_country;
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

export interface UserConfirmEmailChangeMutation_confirmEmailChange_user {
  __typename: "User";
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  isStaff: boolean;
  /**
   * List of public metadata items. Can be accessed without permissions.
   */
  metadata: (UserConfirmEmailChangeMutation_confirmEmailChange_user_metadata | null)[];
  /**
   * List of all user's addresses.
   */
  addresses: (UserConfirmEmailChangeMutation_confirmEmailChange_user_addresses | null)[] | null;
}

export interface UserConfirmEmailChangeMutation_confirmEmailChange {
  __typename: "ConfirmEmailChange";
  accountErrors: UserConfirmEmailChangeMutation_confirmEmailChange_accountErrors[];
  /**
   * A user instance with a new email.
   */
  user: UserConfirmEmailChangeMutation_confirmEmailChange_user | null;
}

export interface UserConfirmEmailChangeMutation {
  /**
   * Confirm the email change of the logged-in user.
   */
  confirmEmailChange: UserConfirmEmailChangeMutation_confirmEmailChange | null;
}

export interface UserConfirmEmailChangeMutationVariables {
  token: string;
}
