import {View} from 'native-base';
import React, {forwardRef, PropsWithoutRef} from 'react';
import {FlatList, RefreshControl, StyleSheet} from 'react-native';
import {ListViewProps} from './ListView.props';
import {scale} from "@common/scale";

const ListView: React.ForwardRefExoticComponent<PropsWithoutRef<ListViewProps> & React.RefAttributes<FlatList>> =
  forwardRef((props, ref) => {
    const {
      onLoadMore,
      onRefreshing,
      canRefresh = true,
      canLoadMore = false,
      refreshing = false,
      refreshControlTop = 0,
      ListFooterComponent,
      ListComponent,
      ...rest
    } = props;

    const loadMore = () => {
      if (canLoadMore && onLoadMore && typeof onLoadMore === 'function') {
        onLoadMore();
      }
    };

    const refresh = () => {
      if (onRefreshing && typeof onRefreshing === 'function') {
        onRefreshing();
      }
    };

    const _ListFooterComponent = () => {
      if (ListFooterComponent) {
        return ListFooterComponent;
      } else {
        return (canLoadMore && <View style={styles.footer}/>) || <View/>;
      }
    };

    const ListComponentWrapper = ListComponent ? ListComponent : FlatList;

    return (
      <ListComponentWrapper
        refreshControl={
          canRefresh ? (
            <RefreshControl
              refreshing={refreshing}
              size={scale(20)}
              progressViewOffset={refreshControlTop}
              onRefresh={refresh}
            />
          ) : undefined
        }
        showsVerticalScrollIndicator={false}
        ref={ref}
        showsHorizontalScrollIndicator={false}
        ListFooterComponent={_ListFooterComponent()}
        onEndReached={loadMore}
        onEndReachedThreshold={0.2}
        scrollEventThrottle={16}
        {...rest}
      />
    );
  });

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  footer: {height: scale(20), width: scale(20)},
});

export default ListView;
