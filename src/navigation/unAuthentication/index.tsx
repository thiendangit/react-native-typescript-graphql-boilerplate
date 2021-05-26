import React, {memo} from "react";
import {View} from "native-base";
import {ColorsCustom} from "@themes/color";
import isEqual from "react-fast-compare";
import {APP_SCREEN, RootStackParamList} from "@navigation/screenTypes";
import {LoginScreen} from "@screens/unAuthentication/loginScreen";
import {createStackNavigator, StackNavigationOptions} from "@react-navigation/stack";

const Stack = createStackNavigator<RootStackParamList>();

const UnAuthenticationTab: React.FC = (props) => {

    const options: StackNavigationOptions = {
        headerShown: false,
        cardOverlayEnabled: true
    };

    return (
        <View style={{flex: 1, backgroundColor: ColorsCustom.white}}>
            <Stack.Navigator screenOptions={{headerShown: false, gestureEnabled: true}}>
                <Stack.Screen
                    name={APP_SCREEN.LOGIN}
                    component={LoginScreen}
                    options={options}
                />
            </Stack.Navigator>
        </View>)
};

export const UnAuthentication = memo(UnAuthenticationTab, isEqual);
