import React from 'react'
import RNBootSplash from 'react-native-bootsplash'
import { useSelector } from '@common/hooks'
import { AppDispatch } from '@common/redux'
import { navigationRef } from '@navigation/navigationService'
import { RootNavigation } from '@navigation/RootNavigator'
import { NavigationContainer } from '@react-navigation/native'
import dark from '@themes/dark'
import { useAppTheme } from '@themes/index'
import light from '@themes/light'

const AppNavigation: React.FC = () => {
  const appTheme = useAppTheme()
  const { token } = useSelector((x) => x.app)

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => RNBootSplash.hide({ fade: true })}
      theme={
        appTheme.mode === 'dark'
          ? dark.theme.reactNavigation
          : light.theme.reactNavigation
      }>
      <RootNavigation token={token} />
      <AppDispatch />
    </NavigationContainer>
  )
}

export default AppNavigation
