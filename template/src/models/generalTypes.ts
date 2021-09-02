import {SortEnum} from '@lib/apollo/queries/getCategoryProducts';
import {ApolloError, NetworkStatus} from '@apollo/client';

export enum SLICE_NAME {
  APP = 'APP',
}

export interface FontSize {
  FONT_4: number

  FONT_5: number

  FONT_6: number

  FONT_7: number

  FONT_8: number

  FONT_9: number

  FONT_10: number

  FONT_11: number

  FONT_12: number

  FONT_13: number

  FONT_14: number

  FONT_15: number

  FONT_16: number

  FONT_17: number

  FONT_18: number

  FONT_19: number

  FONT_20: number

  FONT_21: number

  FONT_22: number

  FONT_23: number

  FONT_24: number

  FONT_25: number

  FONT_26: number

  FONT_27: number

  FONT_28: number

  FONT_29: number

  FONT_30: number

  FONT_31: number

  FONT_32: number

  FONT_33: number

  FONT_34: number

  FONT_35: number

  FONT_36: number

  FONT_37: number
}

export interface Spacing {
  none: number
  tiny: number
  smaller: number
  small: number
  medium: number
  mediumPlush: number
  large: number
  huge: number
  massive: number
}

// eslint-disable-next-line unused-imports/no-unused-vars
export interface Result<T> {
  data: T | undefined
  networkStatus: NetworkStatus
  error: ApolloError | undefined
  loading: boolean
  refreshing: boolean
  isLoadMore: boolean
  refresh: (arg0?: { name?: SortEnum; price?: SortEnum }) => void

  loadMore(): void
}
