import React, {memo} from 'react';
import isEqual from 'react-fast-compare';
import {Login} from '@containers';
import {APP_SCREEN, RootStackParamList} from '@navigation/screenTypes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, APP_SCREEN.LOGIN>

const LoginComponent: React.FC<LoginScreenProps> = ({}: LoginScreenProps) => {
  return <Login/>;
};

export const LoginScreen = memo(LoginComponent, isEqual);
