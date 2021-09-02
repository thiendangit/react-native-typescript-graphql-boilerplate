import React from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {useSelector} from '@common/hooks';
import {AppDispatch} from '@common/redux';
import {navigationRef} from '@navigation/navigationService';
import {RootNavigation} from '@navigation/RootNavigator';
import {NavigationContainer} from '@react-navigation/native';
import light from '@themes/light';
import dark from '@themes/dark';
import MyToast from '@components/MyToast/MyToast';

const AppNavigation: React.FC = () => {
  const {
    token,
    theme: {dark: darkMode},
  } = useSelector((x) => x.app);
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => RNBootSplash.hide({fade: true})}
      theme={
        darkMode ? dark.theme.reactNavigation : light.theme.reactNavigation
      }>
      <RootNavigation token={token} />
      <MyToast />
      <AppDispatch />
    </NavigationContainer>
  );
};

export default AppNavigation;
