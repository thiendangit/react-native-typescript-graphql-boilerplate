import {gql} from '@apollo/client';
import {PRODUCT_PRICE_FRAGMENT} from './productPriceFragment';
import type {PriceRangeType} from './productPriceFragment';

export interface ProductInListType {
  id: number
  sku: string
  name: string
  smallImage: {
    url: string
  }
  priceRange: PriceRangeType
}

export const PRODUCTS_FRAGMENT = gql`
  fragment ProductsListFragment on Products {
    items {
      id
      name
      sku
      image {
        url
        label
      }
      ...ProductPrice
    }
  }
  ${PRODUCT_PRICE_FRAGMENT}
`;
