import {StyleProp, ViewStyle} from 'react-native';
import {ImageStyle, Source} from 'react-native-fast-image';
import {ImageTypes} from '@assets/image';

type ResizeMode = 'contain' | 'cover' | 'stretch' | 'center';

export interface ImageProps {
  /**
   * Overwrite image style
   * @default undefined
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  style?: ImageStyle | any;

  /**
   * Overwrite wrap image style
   * @default undefined
   */
  containerStyle?: StyleProp<ViewStyle>;

  /**
   * source image(local)
   * @default undefined
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  source: Source | any;

  resizeMode?: ResizeMode;
  /**
   * TintColor
   *
   * If supplied, changes the color of all the non-transparent pixels to the given color.
   */
  tintColor?: number | string;
  /**
   * source image on error
   * @default undefined
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errorImageSource?: ImageTypes | Source | any
  /**
   * source default on loading
   * @default undefined
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  defaultSource?: ImageTypes | Source | any;
}
