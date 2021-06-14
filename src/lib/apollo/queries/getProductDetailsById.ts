import {gql} from '@apollo/client';
import {PRODUCT_FRAGMENT} from '@lib/apollo/queries/productFragment';
import {ProductInListType} from '@lib/apollo/queries/productFragment';

export interface ProductDetailsDataType {
  products: {
    items: Array<ProductInListType>
  }
}

export const GET_PRODUCT_DETAILS_BY_ID = gql`
  query GetProductDetailsById($sku: String) {
    products(filter: { sku: { eq: $sku } }) {
      ...ProductFragment
    }
  }
  ${PRODUCT_FRAGMENT}
`;
