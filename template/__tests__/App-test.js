/**
 * @format
 */

// import React from 'react';
// // Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';
// import 'react-native';
// import App from '../src/App';
import AsyncStorage from '@react-native-async-storage/async-storage';

// it('renders correctly', () => {
//     renderer.create(<App/>);
// });

beforeEach(() => {
  AsyncStorage.clear();
  // console.log(`After the data is being reset :`)
  // console.log(AsyncStorage)
});

it('can read AsyncStorage', async () => {
  await AsyncStorage.setItem('username', 'testUser');
  let usernameValue = await AsyncStorage.getItem('username');
  // console.log(`After the data is being set :`)
  // console.log(AsyncStorage)
  expect(usernameValue).toBe('testUser');
});
