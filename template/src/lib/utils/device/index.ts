/**
 * Helper class to fixing iPhoneX UI
 */
import {Dimensions, Platform} from 'react-native';
import {scale} from '@common/scale';

export const isIphoneX = () => {
  const dimension = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimension.height === 780 ||
      dimension.width === 780 ||
      dimension.height === 812 ||
      dimension.width === 812 ||
      dimension.height === 844 ||
      dimension.width === 844 ||
      dimension.height === 896 ||
      dimension.width === 896 ||
      dimension.height === 926 ||
      dimension.width === 926)
  );
};

export default {
  ToolbarHeight: isIphoneX() ? scale(35) : 0,
  isIOS: Platform.OS === 'ios',
};
