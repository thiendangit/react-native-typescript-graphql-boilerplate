import {gql} from '@apollo/client';

export interface GetCategoryProductsVars {
    id: string;
    pageSize?: number;
    currentPage?: number;
    price?: SortEnum;
    name?: SortEnum;
}

export interface CategoryProductsDataType {
    products: {
        totalCount: number;
        items: Array<any>;
    };
}

export enum SortEnum {
    ASC = 'ASC',
    DESC = 'DESC',
}

export const GET_CATEGORY_PRODUCTS = gql`
  query GetCategoryProducts{
    products(
        search: ""
        filter: { price: { to: "50" } }
        pageSize: 25
        sort: { price: DESC }
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
