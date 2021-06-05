import { gql } from '@apollo/client';

export interface CreateNewCustomerType {
  createCustomer: {
    customer: {
      firstname: string
      lastname: string
      email: string
      is_subscribed: boolean
    }
  }
}

export interface CreateNewCustomerVars {
  firstname: string
  lastname: string
  email: string
  password: string
  is_subscribed?: boolean
}

export const CREATE_NEW_CUSTOMER = gql`
  mutation CreateNewCustomer(
    $firstname: String!
    $lastname: String!
    $email: String!
    $password: String!
  ) {
    createCustomer(
      input: {
        firstname: $firstname
        lastname: $lastname
        email: $email
        password: $password
        is_subscribed: true
      }
    ) {
      customer {
        firstname
        lastname
        email
        is_subscribed
      }
    }
  }
`;
