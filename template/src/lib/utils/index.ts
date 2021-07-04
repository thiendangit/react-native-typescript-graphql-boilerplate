import { Dimensions } from 'react-native';
import _Device from './device';

export * from './storage/storage';
export * from './device';
export * from './i18n/i18n';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const Device = _Device;

export { deviceHeight, deviceWidth, Device };
