import {gql} from '@apollo/client';

export interface PriceRangeType {
  minimum_price: {
    regular_price: {
      currency: string
      value: number
    }
  }
}

export const PRODUCT_PRICE_FRAGMENT = gql`
  fragment ProductPrice on ProductInterface {
    price_range {
      minimum_price {
        regular_price {
          value
          currency
        }
      }
    }
  }
`;
