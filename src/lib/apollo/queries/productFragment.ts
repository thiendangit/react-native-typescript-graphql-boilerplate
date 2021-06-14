import {gql} from '@apollo/client';
import {PRODUCT_PRICE_FRAGMENT} from './productPriceFragment';
import type {PriceRangeType} from './productPriceFragment';

export interface ProductInListType {
  id: number
  sku: string
  name: string
  image: {
    url: string
    label: string
  }
  price_range: PriceRangeType
}

export const PRODUCT_FRAGMENT = gql`
  fragment ProductFragment on Products {
    items {
      id
      name
      sku
      image {
        url
        label
      }
      description {
        html
      }
      related_products {
        uid
        name
        image {
          url
          label
        }
        price_range {
          minimum_price {
            regular_price {
              value
              currency
            }
          }
        }
      }
      ...ProductPrice
    }
  }
  ${PRODUCT_PRICE_FRAGMENT}
`;
