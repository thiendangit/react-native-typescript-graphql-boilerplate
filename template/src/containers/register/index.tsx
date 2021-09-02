import React, {memo, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {ActivityIndicator, Image, SafeAreaView, StatusBar} from 'react-native';
import {images} from '@assets/image';
import {scale} from '@common/scale';
import {Button, Container, Form, Input, Item, Text, View} from 'native-base';
import {useSelector, useToast} from '@common/hooks';
import {useTheme} from '@react-navigation/native';
import {NavigationService} from '@navigation/navigationService';
import Icon from 'react-native-vector-icons/AntDesign';
import {useRegister} from '@lib/logic/auth/useRegister';
import isEqual from 'react-fast-compare';

const RegisterContainer: React.FC = () => {
  const theme = useTheme();
  const {
    theme: {dark},
  } = useSelector((x) => x.app);
  const {t} = useTranslation();
  const toast = useToast();

  const {values, loading, error, data, handleChange, handleSubmit} =
    useRegister();

  useEffect(() => {
    if (data?.createCustomer?.customer?.email) {
      toast(t('dialog:success'));
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      toast(t(error.message));
    }
  }, [error]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <StatusBar barStyle={dark ? 'light-content' : 'dark-content'} />
      <Container
        style={{
          flex: 1,
          backgroundColor: theme.colors.background,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            color: theme.colors.text,
          }}>
          RN Graphql Boilerplate
        </Text>
        <Image
          source={images.logoBear}
          style={{
            marginVertical: scale(10),
            height: scale(100),
            width: scale(100),
          }}
        />
        <Text
          style={{
            color: theme.colors.text,
            paddingHorizontal: 24,
            fontSize: 14,
            marginVertical: 16,
            textAlign: 'center',
          }}>
          {t('dialog:darkModeReview')}
        </Text>
        <View style={{height: scale(200)}}>
          <Form>
            <Item
              style={{
                height: scale(30),
                width: scale(300),
                marginTop: scale(15),
                borderRadius: scale(5),
              }}
              regular>
              <Input
                editable={!loading}
                style={{
                  color: theme.colors.text,
                }}
                value={values.firstname}
                label={t('firstName')}
                onChangeText={handleChange('firstname')}
                placeholder={'First Name'}
              />
            </Item>
            <Item
              style={{
                height: scale(30),
                width: scale(300),
                marginTop: scale(15),
                borderRadius: scale(5),
              }}
              regular>
              <Input
                editable={!loading}
                style={{
                  color: theme.colors.text,
                }}
                value={values.lastname}
                label={t('lastName')}
                onChangeText={handleChange('lastname')}
                placeholder={'Last Name'}
              />
            </Item>
            <Item
              style={{
                height: scale(30),
                borderRadius: scale(5),
                marginTop: scale(10),
                width: scale(300),
              }}
              regular>
              <Input
                value={values.email}
                editable={!loading}
                style={{
                  color: theme.colors.text,
                }}
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
                borderRadius: scale(5),
              }}
              regular>
              <Input
                secureTextEntry={values.secureTextEntry}
                editable={!loading}
                style={{
                  color: theme.colors.text,
                }}
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
            <Text style={{color: 'white'}}> {t('Register')} </Text>
          )}
        </Button>
        <Button
          style={{
            position: 'absolute',
            left: 5,
            top: 10,
            height: scale(30),
            width: scale(30),
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => NavigationService.goBack()}>
          <Icon name="left" color={theme.colors.text} />
        </Button>
      </Container>
    </SafeAreaView>
  );
};

export const Register = memo(RegisterContainer, isEqual);
