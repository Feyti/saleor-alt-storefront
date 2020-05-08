import { USER_DETAILS_FRAGMENT } from "@/fragments/user";
import { gql } from "apollo-boost";

export const CUSTOMER_REGISTER_MUTATION = gql`
  ${USER_DETAILS_FRAGMENT}
  mutation CustomerRegisterMutation($input: AccountRegisterInput!) {
    accountRegister(input: $input) {
      errors {
        field
        message
      }
      user {
        ...UserDetails
      }
      requiresConfirmation
    }
  }
`;
