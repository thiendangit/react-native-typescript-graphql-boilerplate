import {LogBox} from 'react-native';
import Reactotron, {asyncStorage} from 'reactotron-react-native';
import {DEV_SERVER_IP} from '@env';

import {Tron} from '../../global';

Reactotron.configure({host: DEV_SERVER_IP}) // controls connection & communication settings
  .useReactNative({}) // add all built-in react native plugins
  .use(asyncStorage({}))
  .connect(); // let's connect!

Reactotron.clear && Reactotron.clear();

console.tron = Reactotron as unknown as Tron;

LogBox.ignoreLogs(['Setting a timer']);

export default Reactotron;
