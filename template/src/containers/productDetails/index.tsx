import React, {memo, useEffect, useRef, useState} from 'react';
import isEqual from 'react-fast-compare';
import {SafeAreaView, View, Image} from 'react-native';
import {useTheme} from '@react-navigation/native';
import GenericTemplate from '@lib/components/GenericTemplate/GenericTemplate';
import {styles} from '@containers/productDetails/style';
import {graphql} from '@apollo/client/react/hoc';
import {
  GET_PRODUCT_DETAILS_BY_ID,
  ProductDetailsDataType,
} from '@lib/apollo/queries/getProductDetailsById';
import {ProductDetailsProps} from '@screens/authentication/productDetailsScreen';
import {Result} from '@models/generalTypes';
import {ColorsCustom} from '@themes/color';
import {Icon, Spinner, Text} from 'native-base';
import {scale} from '@common/scale';
import {ProductInListType} from '@lib/apollo/queries/productFragment';
import {NavigationService} from '@navigation/navigationService';
import BottomSheet from 'reanimated-bottom-sheet';
import BottomSheetBehavior from 'reanimated-bottom-sheet';
import {deviceHeight} from '@lib/utils';
import {FontSizeDefault} from '@themes/fontSize';
import {formatMoney} from '@utils/money/money';

type ProductDetailsContainerProps =
  | (ProductDetailsProps & Result<ProductDetailsDataType>)
  | any

const ProductDetailsComponent: React.FC<ProductDetailsContainerProps> = (
  props,
) => {
  const theme = useTheme();
  const [product, setProduct] = useState<ProductInListType>();
  const sheetRef = useRef<BottomSheetBehavior>(null);

  useEffect(() => {
    if (props.data?.products?.items.length > 0 || !props?.data?.loading) {
      setProduct(props.data?.products?.items[0]);
      setTimeout(() => {
        sheetRef?.current?.snapTo(0);
      }, 400);
    }
  }, [props?.data]);

  if (props?.data.loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <Spinner />
      </View>
    );
  }

  return (
    <SafeAreaView
      style={[
        styles(theme).container
      ]}>
      <GenericTemplate>
        <View
          style={{
            flex: 1,
            backgroundColor: ColorsCustom.light_blue,
          }}>
          <View
            style={{
              marginTop: scale(18),
              alignItems: 'center',
            }}>
            <Image
              source={{uri: product?.image?.url}}
              resizeMode={'contain'}
              style={{height: scale(200), width: scale(200)}}
            />
          </View>
          <BottomSheet
            ref={sheetRef}
            snapPoints={[deviceHeight/1.8, deviceHeight/3, 0]}
            enabledGestureInteraction={true}
            initialSnap={1}
            renderHeader={() => (
              <View style={styles().header}>
                <View style={styles().panelHeader}>
                  <View style={styles().panelHandle} />
                </View>
              </View>
            )}
            renderContent={() => {
              return (
                <View
                  style={{
                    paddingHorizontal: scale(15),
                    backgroundColor: 'white',
                    height: scale(deviceHeight / 2),
                  }}>
                  <Text
                    style={{
                      fontSize: FontSizeDefault.FONT_16,
                      color: ColorsCustom.light_red,
                      fontWeight: '500',
                    }}>
                    {product?.sku}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={{
                        fontSize: FontSizeDefault.FONT_18,
                        color: theme.colors.text,
                        fontWeight: '500',
                      }}>
                      {product?.name}
                    </Text>
                    <Text
                      style={{
                        fontSize: FontSizeDefault.FONT_18,
                        color: theme.colors.text,
                        fontWeight: '500',
                      }}>
                      {formatMoney(
                        Number(
                          product?.price_range?.minimum_price?.regular_price
                            ?.value,
                        ),
                        '$',
                      )}
                    </Text>
                  </View>
                </View>
              );
            }}
          />
          <View style={styles().backButtonContainer}>
            <Icon
              name={'ios-chevron-back-sharp'}
              style={{
                fontSize: scale(17),
              }}
              onPress={() => {
                NavigationService.goBack();
              }}
            />
          </View>
        </View>
      </GenericTemplate>
    </SafeAreaView>
  );
};

export const ProductDetails = memo(
  graphql(GET_PRODUCT_DETAILS_BY_ID, {
    options: ({route}: ProductDetailsProps) => {
      return {
        variables: {
          sku: route?.params?.sku,
        },
      };
    },
  })(ProductDetailsComponent),
  isEqual,
);
