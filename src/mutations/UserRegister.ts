import { gql } from "apollo-boost";
import { USER_DETAILS_FRAGMENT } from "@/fragments/user";
import { ADDRESS_DETAILS_FRAGMENT } from "@/fragments/address";

export const USER_REGISTER_MUTATION = gql`
  ${USER_DETAILS_FRAGMENT}
  ${ADDRESS_DETAILS_FRAGMENT}
  mutation userRegisterMutation($input: AccountRegisterInput!) {
    accountRegister(input: $input) {
      errors {
        field
        message
      }
      user {
        ...UserDetails
        addresses {
          ...AddressDetails
        }
      }
      requiresConfirmation
    }
  }
`;
