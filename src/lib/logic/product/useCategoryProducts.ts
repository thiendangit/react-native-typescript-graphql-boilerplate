import {useEffect, useState} from 'react';
import {useQuery, ApolloError, NetworkStatus} from '@apollo/client';
import {
    GET_CATEGORY_PRODUCTS,
    GetCategoryProductsVars,
    CategoryProductsDataType,
    SortEnum,
} from '@lib/apollo/queries/getCategoryProducts';

interface Props {
    categoryId: string;
}

interface Result {
    data: CategoryProductsDataType | undefined;
    networkStatus: NetworkStatus;
    error: ApolloError | undefined;
    refresh: (arg0?: { name?: SortEnum; price?: SortEnum }) => void;
    loadMore(): void;
}

export const useCategoryProducts = ({categoryId: id}: Props): Result => {
    const [currentPage, setCurrentPage] = useState<number>(1);

    const LIMITS = 10;

    const {refetch, loading, data, error, fetchMore, networkStatus} = useQuery<CategoryProductsDataType,
        GetCategoryProductsVars>(GET_CATEGORY_PRODUCTS, {
        variables: {
            id
        },
        notifyOnNetworkStatusChange: true,
    });

    useEffect(() => {
        if (!loading && currentPage !== 1) {
            fetchMore({
                variables: {
                    currentPage,
                },
            }).then(() => {
            });
        }
    }, [currentPage]);

    const loadMore = () => {
        if (loading) {
            return;
        }

        if (
            currentPage * LIMITS ===
            data?.products?.items?.length &&
            data?.products?.items.length < data?.products?.totalCount
        ) {
            setCurrentPage(prevState => prevState + 1);
        }
    };

    const refresh = ({
                         price,
                         name,
                     }: { price?: SortEnum; name?: SortEnum } = {}) => {
        refetch({
            price,
            name,
        }).then(() => {
        });
        setCurrentPage(1);
    };

    return {
        data,
        networkStatus,
        error,
        refresh,
        loadMore,
    };
};
