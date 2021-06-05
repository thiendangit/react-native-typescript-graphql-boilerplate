import React, { memo } from 'react';
import isEqual from 'react-fast-compare';
import { APP_SCREEN, RootStackParamList } from '@navigation/screenTypes';
import { StackScreenProps } from '@react-navigation/stack';
import { Register } from '@containers/register';

type RegisterScreenProps = StackScreenProps<
  RootStackParamList,
  APP_SCREEN.LOGIN
>

const RegisterComponent: React.FC<RegisterScreenProps> = ({}: RegisterScreenProps) => {
  return <Register />;
};

export const RegisterScreen = memo(RegisterComponent, isEqual);
