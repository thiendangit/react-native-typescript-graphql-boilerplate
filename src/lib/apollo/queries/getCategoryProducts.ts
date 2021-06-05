import { gql } from '@apollo/client';

export interface GetCategoryProductsVars {
  id: string
  pageSize?: number
  currentPage?: number
  price?: SortEnum
  name?: SortEnum
}

export interface CategoryProductsDataType {
  products: {
    total_count: number
    items: Array<any>
  }
}

export enum SortEnum {
  ASC = 'ASC',
  DESC = 'DESC',
}

export const GET_CATEGORY_PRODUCTS = gql`
  query GetCategoryProducts(
    $id: String
    $pageSize: Int!
    $currentPage: Int!
    $price: SortEnum
    $name: SortEnum
  ) {
    products(
      filter: { category_id: { eq: $id } }
      pageSize: $pageSize
      sort: { price: $price, name: $name }
      currentPage: $currentPage
    ) {
      items {
        name
        sku
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
      total_count
      page_info {
        page_size
      }
    }
  }
`;
