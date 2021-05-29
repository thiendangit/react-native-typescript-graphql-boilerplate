import React, {memo, useEffect} from 'react'
import isEqual from 'react-fast-compare'
import {useTranslation} from 'react-i18next'
import {ActivityIndicator, Image, Platform, SafeAreaView, StatusBar} from 'react-native'
import {images} from '@assets/image'
import {scale} from '@common/scale'
import {useLogin} from '@lib/logic/auth/useLogin'
import {Button, Container, Form, Input, Item, Text, View} from 'native-base'
import {Switch} from "react-native-gesture-handler";
import {actionsApp} from "@store/app_reducer";
import {useSelector} from "@common/hooks";
import {dispatch} from "@common/redux";
import {useTheme} from "@react-navigation/native";

const LoginContainer = ({}) => {
    const theme = useTheme();
    const {theme: {dark}} = useSelector(x => x.app);
    const {t} = useTranslation();
    const {
        values,
        loading,
        error,
        data,
        handleChange,
        handleSubmit,
    } = useLogin();

    useEffect(() => {
        // if (error?.name && (error?.message || !loading)) {
        //     alert(error.message);
        // }
    }, [error, loading, data]);

    return (
        <SafeAreaView style={{
            flex: 1
        }}>
            <StatusBar barStyle={dark ? "light-content" : "dark-content"}/>
            <Container style={{
                flex: 1,
                backgroundColor: theme.colors.background,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{
                    fontSize: 24,
                    fontWeight: 'bold',
                    color: theme.colors.text,
                }}>RN Graphql Boilerplate</Text>
                <Image
                    source={images.logoBear}
                    style={{
                        marginVertical: scale(10),
                        height: scale(100),
                        width: scale(100),
                    }}
                />
                <Text style={{
                    color: theme.colors.text,
                    paddingHorizontal: 24,
                    fontSize: 14,
                    marginVertical: 16,
                    textAlign: 'center',
                }}>{t('dialog:darkModeReview')}</Text>
                <View style={{height: scale(100)}}>
                    <Form>
                        <Item style={{height: scale(30), width: scale(300)}} regular>
                            <Input
                                value={values.email}
                                editable={!loading}
                                style={{
                                    color : theme.colors.text
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
                            }}
                            regular>
                            <Input
                                secureTextEntry={values.secureTextEntry}
                                editable={!loading}
                                style={{
                                    color : theme.colors.text
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
                    {(loading && <ActivityIndicator size="small" color={'white'}/>) || (
                        <Text style={{color: 'white'}}> Login </Text>
                    )}
                </Button>
                <View
                    style={{
                        position: 'absolute',
                        top: scale(40),
                        right: scale(20),
                    }}>
                    <Switch
                        trackColor={{
                            true: Platform.OS === 'ios' ? theme.colors.primary : theme.colors.border,
                            false: theme.colors.border,
                        }}
                        thumbColor={Platform.OS === 'android' ? theme.colors.primary : ''}
                        value={dark}
                        style={{
                            marginVertical: 16
                        }}
                        onValueChange={() => dispatch(actionsApp.onSetDarkMode(!dark))}
                    />
                </View>
            </Container>
        </SafeAreaView>
    )
};

export const Login = memo(LoginContainer, isEqual);
