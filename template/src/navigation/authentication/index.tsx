import React, {memo} from 'react';
import isEqual from 'react-fast-compare';
import {APP_SCREEN, RootStackParamList} from '@navigation/screenTypes';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {LaunchesScreen} from '@screens/authentication/lauchScreen';
import {ColorsCustom} from '@themes/color';
import {View} from 'native-base';
import {ProductDetailsScreen} from '@screens/authentication/productDetailsScreen';
import {StatusBar} from 'react-native';
import {useSelector} from '@common/hooks';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthenticationTab: React.FC = () => {
  const options: NativeStackNavigationOptions = {
    headerShown: false,
  };

  const {
    theme: {dark},
  } = useSelector((x) => x.app);

  return (
    <View style={{flex: 1, backgroundColor: ColorsCustom.white}}>
      <StatusBar barStyle={dark ? 'light-content' : 'dark-content'} />
      <Stack.Navigator
        screenOptions={{headerShown: false, gestureEnabled: true}}>
        <Stack.Screen
          name={APP_SCREEN.SPLASH}
          component={LaunchesScreen}
          options={options}
        />
        <Stack.Screen
          name={APP_SCREEN.PRODUCT_DETAILS}
          component={ProductDetailsScreen}
          options={options}
        />
      </Stack.Navigator>
    </View>
  );
};

export const Authentication = memo(AuthenticationTab, isEqual);
