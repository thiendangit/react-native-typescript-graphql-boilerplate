import React, {memo} from 'react';
import isEqual from 'react-fast-compare';
import {ProductDetails} from '@containers';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {APP_SCREEN, RootStackParamList} from '@navigation/screenTypes';

export type ProductDetailsProps = NativeStackScreenProps<
  RootStackParamList,
  APP_SCREEN.PRODUCT_DETAILS
>

const ProductDetailsComponent: React.FC<ProductDetailsProps> = (
  props: ProductDetailsProps,
) => {
  return <ProductDetails route={props.route} navigation={props.navigation} />;
};

export const ProductDetailsScreen = memo(ProductDetailsComponent, isEqual);
