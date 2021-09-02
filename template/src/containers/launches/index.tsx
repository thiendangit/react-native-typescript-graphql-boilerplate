import React, {memo, useCallback} from 'react';
import isEqual from 'react-fast-compare';
import {useTranslation} from 'react-i18next';
import {
  Alert,
  FlatList,
  RefreshControl,
  SafeAreaView,
  View,
} from 'react-native';
import {dispatch} from '@common/redux';
import {scale} from '@common/scale';
import {actionsApp} from '@store/app_reducer';
import {Button, Icon, Spinner, Text, Thumbnail} from 'native-base';
import {useCategoryProducts} from '@lib/logic/product/useCategoryProducts';
import {removeCustomerToken} from '@lib/utils';
import {formatMoney} from '@utils/money/money';
import {useTheme} from '@react-navigation/native';
import GenericTemplate from '@lib/components/GenericTemplate/GenericTemplate';
import {styles} from '@containers/launches/style';
import {NetworkStatus} from '@apollo/client';
import {NavigationService} from '@navigation/navigationService';
import {APP_SCREEN} from '@navigation/screenTypes';
import {ProductInListType} from '@lib/apollo/queries/productsFragment';

const LaunchesScreen: React.FC = () => {
  const {t} = useTranslation();
  const theme = useTheme();

  const {
    data,
    refresh,
    loading,
    refreshing,
    loadMore,
    networkStatus,
    isLoadMore,
  } = useCategoryProducts({categoryId: '2'});

  const onLogout = () => {
    Alert.alert('Logout', t('question:are_you_sure'), [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'destructive',
      },
      {
        text: 'OK',
        onPress: async () => {
          await removeCustomerToken();
          dispatch(actionsApp.onLogout());
        },
      },
    ]);
  };

  const goToProductDetails = useCallback((item: ProductInListType) => {
    NavigationService.navigate(APP_SCREEN.PRODUCT_DETAILS, {
      sku: item?.sku,
    });
  }, []);

  const renderFooterComponent = () => {
    return (
      (networkStatus === NetworkStatus.fetchMore && isLoadMore && (
        <View style={styles().footerContainer}>
          <Spinner />
        </View>
      )) || <></>
    );
  };

  const renderItem = ({item}: { item: any; index: number }) => {
    return (
      <Button
        style={styles(theme).itemContainer}
        onPress={() => goToProductDetails(item)}>
        <Thumbnail
          source={{uri: item.image.url}}
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
      </Button>
    );
  };

  return (
    <SafeAreaView style={styles(theme).container}>
      <GenericTemplate
        style={{alignItems: 'center'}}
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
        <Button
          style={{
            position: 'absolute',
            right: scale(10),
            height: scale(30),
            alignItems: 'center',
            width: scale(40),
            borderRadius: scale(10),
          }}
          onPress={onLogout}>
          <Icon
            name={'log-out'}
            style={{
              height: scale(25),
              width: scale(25),
            }}
          />
        </Button>
      </GenericTemplate>
    </SafeAreaView>
  );
};

export const Launches = memo(LaunchesScreen, isEqual);
