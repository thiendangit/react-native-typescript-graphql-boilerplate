import React, {memo} from 'react';
import isEqual from 'react-fast-compare';
import {ProductList} from '@containers';

const ProductListComponent = () => {
  return <ProductList />;
};

export const ProductListScreen = memo(ProductListComponent, isEqual);
