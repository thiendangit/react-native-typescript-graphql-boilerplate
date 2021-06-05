import { useEffect, useState } from 'react';
import { ApolloError, NetworkStatus, useQuery } from '@apollo/client';
import {
  CategoryProductsDataType,
  GET_CATEGORY_PRODUCTS,
  GetCategoryProductsVars,
  SortEnum,
} from '@lib/apollo/queries/getCategoryProducts';
import { LIMITS } from '../../../config/appConfig';

interface Props {
  categoryId: string
}

interface Result {
  data: CategoryProductsDataType | undefined
  networkStatus: NetworkStatus
  error: ApolloError | undefined
  loading: boolean
  refreshing: boolean
  isLoadMore: boolean
  refresh: (arg0?: { name?: SortEnum; price?: SortEnum }) => void

  loadMore(): void
}

export const useCategoryProducts = ({ categoryId: id }: Props): Result => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [isLoadMore, setLoadMore] = useState<boolean>(false);

  const { refetch, loading, data, error, fetchMore, networkStatus } = useQuery<
    CategoryProductsDataType,
    GetCategoryProductsVars
  >(GET_CATEGORY_PRODUCTS, {
    variables: {
      id,
      currentPage: 1,
      pageSize: LIMITS.product,
    },
    notifyOnNetworkStatusChange: true,
  });

  useEffect(() => {
    console.log({ currentPage, loading });

    async function f() {
      if (!loading && currentPage !== 1) {
        setLoadMore(true);
        await fetchMore({
          variables: {
            currentPage: currentPage,
          },
        });
        setLoadMore(false);
        console.log({ data });
      }
    }

    f().then();
  }, [currentPage]);

  const loadMore = () => {
    if (loading) {
      return;
    }

    console.log(
      currentPage * LIMITS.product,
      data?.products?.items?.length,
      data?.products?.items.length,
      data?.products?.total_count,
    );

    if (
      currentPage * LIMITS.product === data?.products?.items?.length &&
      data?.products?.items.length < data?.products?.total_count
    ) {
      setCurrentPage((prevState) => prevState + 1);
    }
  };

  const refresh = async ({
    price,
    name,
  }: { price?: SortEnum; name?: SortEnum } = {}) => {
    setRefreshing(true);
    if (refetch) {
      await refetch({
        price,
        name,
      });
      if (networkStatus === NetworkStatus.ready) {
        setRefreshing(false);
      }
    }
  };

  return {
    data,
    networkStatus,
    loading,
    refreshing,
    isLoadMore,
    error,
    refresh,
    loadMore,
  };
};
