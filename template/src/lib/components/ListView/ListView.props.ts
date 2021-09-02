import React from 'react';
import {FlatList, FlatListProps} from 'react-native';

export interface ListViewProps extends Omit<FlatListProps<any>, 'refreshing' | 'onRefresh'> {
  /**
   * Function when refreshing
   * @default undefined
   */
  onRefreshing?: () => void;

  /**
   * Function when scroll to end
   * @default undefined
   */
  onLoadMore?: () => void;

  /**
   * Enable to load more when scroll to end
   * @default false
   */
  canLoadMore?: boolean;

  /**
   * State of Refresh Control
   * @default false
   */
  refreshing?: boolean;

  /**
   * Enable to render Refresh Control
   * @default true
   */
  canRefresh?: boolean;

  /**
   * refreshControl progress view top offset.
   * Android only
   * @default 0
   */
  refreshControlTop?: number;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ListComponent?: typeof React.Component | React.ForwardRefExoticComponent<FlatListProps<any> & React.RefAttributes<FlatList<any>>>
}
