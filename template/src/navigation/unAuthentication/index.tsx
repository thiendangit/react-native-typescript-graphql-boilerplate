import React from 'react';
import {APP_SCREEN, RootStackParamList} from '@navigation/screenTypes';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {LoginScreen} from '@screens/unAuthentication/loginScreen';
import {ColorsCustom} from '@themes/color';
import {View} from 'native-base';
import {RegisterScreen} from '@screens/unAuthentication/registerScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const UnAuthenticationTab: React.FC = () => {
  const options: NativeStackNavigationOptions = {
    headerShown: false,
  };

  return (
    <View style={{flex: 1, backgroundColor: ColorsCustom.white}}>
      <Stack.Navigator
        screenOptions={{headerShown: false, gestureEnabled: true}}>
        <Stack.Screen
          name={APP_SCREEN.LOGIN}
          component={LoginScreen}
          options={options}
        />
        <Stack.Screen
          name={APP_SCREEN.REGISTER}
          component={RegisterScreen}
          options={options}
        />
      </Stack.Navigator>
    </View>
  );
};

export const UnAuthentication = UnAuthenticationTab;
