import React, { memo } from 'react'
import isEqual from 'react-fast-compare'
import { APP_SCREEN, RootStackParamList } from '@navigation/screenTypes'
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'
import { LaunchesScreen } from '@screens/authentication/launchesScreen'
import { ColorsCustom } from '@themes/color'
import { View } from 'native-base'

const Stack = createStackNavigator<RootStackParamList>()

const AuthenticationTab: React.FC = props => {

    const options: StackNavigationOptions = {
        headerShown: false,
        cardOverlayEnabled: true
    }

    return (
        <View style={{ flex: 1, backgroundColor: ColorsCustom.white }}>
            <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: true }}>
                <Stack.Screen
                    name={APP_SCREEN.SPLASH}
                    component={LaunchesScreen}
                    options={options}
                />
            </Stack.Navigator>
        </View>)
}

export const Authentication = memo(AuthenticationTab, isEqual)
