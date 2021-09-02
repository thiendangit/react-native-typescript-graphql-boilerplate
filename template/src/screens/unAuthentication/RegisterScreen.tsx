import React, {memo} from 'react';
import isEqual from 'react-fast-compare';
import {APP_SCREEN, RootStackParamList} from '@navigation/screenTypes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Register} from '@containers';

type RegisterScreenProps = NativeStackScreenProps<
  RootStackParamList,
  APP_SCREEN.LOGIN
>

const RegisterComponent: React.FC<RegisterScreenProps> =
  ({}: RegisterScreenProps) => {
    return <Register />;
  };

export const RegisterScreen = memo(RegisterComponent, isEqual);
