import React, {} from 'react'
import RNBootSplash from 'react-native-bootsplash'
import {NavigationContainer} from '@react-navigation/native'

import {useAppTheme} from '@src/themes'
import dark from '@themes/dark'
import light from '@themes/light'

import {navigationRef} from "@src/navigation/navigationService";
import {RootNavigation} from "@src/navigation/RootNavigator";
import {AppDispatch, useSelector} from "@src/common";

const AppNavigation: React.FC = () => {
    const appTheme = useAppTheme();
    const {token} = useSelector(x => x.app);

    return (
        <NavigationContainer
            ref={navigationRef}
            onReady={() => RNBootSplash.hide({fade: true})}
            theme={
                appTheme.mode === 'dark'
                    ? dark.theme.reactNavigation
                    : light.theme.reactNavigation
            }>
            <RootNavigation token={token}/>
            <AppDispatch/>
        </NavigationContainer>)
};

export default AppNavigation
