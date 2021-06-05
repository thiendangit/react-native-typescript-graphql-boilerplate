import React, { memo } from 'react';
import isEqual from 'react-fast-compare';
import { useTranslation } from 'react-i18next';
import { FlatList, RefreshControl, SafeAreaView, View } from 'react-native';
import { dispatch } from '@common/redux';
import { scale } from '@common/scale';
import { actionsApp } from '@store/app_reducer';
import { Button, Spinner, Text, Thumbnail } from 'native-base';
import { useCategoryProducts } from '@lib/logic/product/useCategoryProducts';
import { removeCustomerToken } from '@lib/utils';
import { formatMoney } from '@utils/money/money';
import { useTheme } from '@react-navigation/native';
import GenericTemplate from '@lib/components/GenericTemplate/GenericTemplate';
import { styles } from '@containers/launches/style';
import { NetworkStatus } from '@apollo/client';

const LaunchesScreen: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const {
    data,
    refresh,
    loading,
    refreshing,
    loadMore,
    networkStatus,
    isLoadMore,
  } = useCategoryProducts({ categoryId: '2' });

  const onLogout = async () => {
    await removeCustomerToken();
    dispatch(actionsApp.onLogout());
  };

  const renderFooterComponent = () => {
    return (
      (networkStatus === NetworkStatus.fetchMore && isLoadMore && (
        <View style={styles().footerContainer}>
          <Spinner />
        </View>
      )) || <></>
    );
  };

  const renderItem = ({ item }: { item: any; index: number }) => {
    return (
      <View style={styles(theme).itemContainer}>
        <Thumbnail
          source={{ uri: item.image.url }}
          style={{
            marginLeft: scale(10),
            marginTop: scale(5),
          }}
        />
        <View
          style={{
            marginLeft: scale(10),
            marginTop: scale(3),
            flexDirection: 'column',
          }}>
          <Text
            style={{
              color: theme.colors.text,
            }}>
            {item?.name}
          </Text>
          <Text
            style={{
              color: theme.colors.text,
            }}>
            {formatMoney(item?.price_range?.minimum_price?.regular_price.value)}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles(theme).container}>
      <GenericTemplate
        style={{ alignItems: 'center' }}
        loading={loading && !refreshing && !isLoadMore}>
        <Text style={styles().header}>RN Graphql Boilerplate</Text>
        <FlatList
          data={data?.products?.items}
          keyExtractor={(item, index) => index.toString()}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => {
                refresh();
              }}
            />
          }
          renderItem={renderItem}
          onEndReachedThreshold={0.1}
          onEndReached={() => {
            loadMore();
          }}
          ListFooterComponent={renderFooterComponent}
        />
      </GenericTemplate>
      <Button
        style={{ alignSelf: 'center', marginVertical: scale(10) }}
        onPress={onLogout}>
        <Text style={{ color: 'white' }}> {t('logout')} </Text>
      </Button>
    </SafeAreaView>
  );
};

export const Launches = memo(LaunchesScreen, isEqual);
