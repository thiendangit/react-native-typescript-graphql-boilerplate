import { AppRegistry } from 'react-native'

import App from './src/App'
import { name as appName } from './app.json'

if (__DEV__) {
  require('./src/config/reactotronConfig')
  console.tron.log('Reactotron configured')
}

AppRegistry.registerComponent(appName, () => App)
