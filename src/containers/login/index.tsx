import React, { memo, useEffect } from 'react'
import isEqual from 'react-fast-compare'
import { useTranslation } from 'react-i18next'
import { ActivityIndicator, Image, Platform } from 'react-native'
import { images } from '@assets/image'
import { scale } from '@common/scale'
import Container from '@components/container'
import { useTheme } from '@emotion/react'
import { useLogin } from '@lib/logic/auth/useLogin'
import { useAppTheme } from '@themes/index'
import { Button, Form, Input, Item, Text, View } from 'native-base'

import { ThemeDescription, ThemeToggle, Title } from './styles'

const LoginContainer = ({}) => {
  const theme = useTheme()
  const appTheme = useAppTheme()
  const { t } = useTranslation()
  const {
    values,
    loading,
    error,
    data,
    handleChange,
    handleSubmit,
  } = useLogin()

  useEffect(() => {
    // if (error?.name && (error?.message || !loading)) {
    //     alert(error.message);
    // }
  }, [error, loading, data]);

  return (
    <Container style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Title>RN Graphql Boilerplate</Title>
      <Image
        source={images.logoBear}
        style={{
          marginVertical: scale(10),
          height: scale(100),
          width: scale(100),
        }}
      />
      <ThemeDescription>{t('dialog:darkModeReview')}</ThemeDescription>
      <View style={{ height: scale(100) }}>
        <Form>
          <Item style={{ height: scale(30), width: scale(300) }} regular>
            <Input
              value={values.email}
              editable={!loading}
              placeholder="Example@address.com"
              label={t('email')}
              onChangeText={handleChange('email')}
            />
          </Item>
          <Item
            style={{
              height: scale(30),
              width: scale(300),
              marginTop: scale(15),
            }}
            regular>
            <Input
              secureTextEntry={values.secureTextEntry}
              editable={!loading}
              value={values.password}
              label={t('Password')}
              onChangeText={handleChange('password')}
              placeholder={'********'}
            />
          </Item>
        </Form>
      </View>
      <Button
        style={{
          alignSelf: 'center',
          height: scale(40),
          width: scale(100),
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={handleSubmit}>
        {(loading && <ActivityIndicator size="small" color={'white'} />) || (
          <Text style={{ color: 'white' }}> Login </Text>
        )}
      </Button>
      <View
        style={{
          position: 'absolute',
          top: scale(40),
          right: scale(20),
        }}>
        <ThemeToggle
          trackColor={{
            true: Platform.OS === 'ios' ? theme.primary : theme.secondary,
            false: theme.border,
          }}
          thumbColor={Platform.OS === 'android' ? theme.primary : ''}
          value={appTheme.mode === 'dark'}
          onValueChange={(value) => appTheme.setMode(value ? 'dark' : 'light')}
        />
      </View>
    </Container>
  )
}

export const Login = memo(LoginContainer, isEqual)
