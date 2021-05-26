import React, { memo } from 'react'
import isEqual from 'react-fast-compare'
import { Login } from '@containers/login'
import { APP_SCREEN, RootStackParamList } from '@navigation/screenTypes'
import { StackScreenProps } from '@react-navigation/stack'

type LoginScreenProps = StackScreenProps<RootStackParamList, APP_SCREEN.LOGIN>

const LoginComponent: React.FC<LoginScreenProps> = ({
  navigation,
}: LoginScreenProps) => {
  return <Login />
}

export const LoginScreen = memo(LoginComponent, isEqual)
