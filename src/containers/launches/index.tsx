import React, {memo} from 'react'
import isEqual from 'react-fast-compare'
import {useTranslation} from 'react-i18next'
import {FlatList, SafeAreaView, View} from 'react-native'
import {dispatch} from '@common/redux'
import {scale} from '@common/scale'
import {actionsApp} from '@store/app_reducer'
import {Button, Container, Text, Thumbnail} from 'native-base'
import {useCategoryProducts} from "@lib/logic/product/useCategoryProducts";
import {deviceWidth, removeCustomerToken} from "@lib/utils";
import {formatMoney} from "@utils/money/money";
import {FontSizeDefault} from "@themes/fontSize";
import {useTheme} from "@react-navigation/native";

const LaunchesScreen: React.FC = () => {
    const {t} = useTranslation();
    const theme = useTheme();

    const {data} = useCategoryProducts({categoryId: "2"});

    const onLogout = async () => {
        await removeCustomerToken();
        dispatch(actionsApp.onLogout())
    };

    // if (isLoading) return <ActivityIndicator size="large" color={theme.primary}/>;

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: theme.colors.background
        }}>
            <Container>
                <View style={{
                    flex: 1,
                    backgroundColor: theme.colors.background,
                    alignItems: 'center', justifyContent: 'center'
                }}>

                    <Text style={{
                        paddingVertical: scale(10),
                        color: 'red',
                        fontSize: FontSizeDefault.FONT_20
                    }}>RN Graphql Boilerplate</Text>
                    <FlatList
                        data={data?.products?.items}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) => {
                            return <View style={{
                                height: scale(70),
                                backgroundColor: theme.colors.background,
                                marginTop: scale(10),
                                width: deviceWidth - scale(20),
                                flexDirection: 'row',
                                marginHorizontal: scale(10),
                                shadowColor: theme.colors.text,
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,

                                elevation: 5,
                            }}>
                                <Thumbnail source={{uri: item.image.url}} style={{
                                    marginLeft: scale(10),
                                    marginTop: scale(5),
                                }}/>
                                <View style={{
                                    marginLeft: scale(10),
                                    marginTop: scale(3),
                                    flexDirection: 'column'
                                }}>
                                    <Text style={{
                                        color: theme.colors.text
                                    }}>
                                        {item?.name}
                                    </Text>
                                    <Text style={{
                                        color: theme.colors.text
                                    }}>
                                        {formatMoney(item?.price_range?.minimum_price?.regular_price.value)}
                                    </Text>
                                </View>
                            </View>
                        }}/>
                    <Button
                        style={{alignSelf: 'center', marginVertical: scale(10)}}
                        onPress={onLogout}>
                        <Text style={{color: 'white'}}> {t('logout')} </Text>
                    </Button>
                </View>
            </Container>
        </SafeAreaView>
    )
};

export const Launches = memo(LaunchesScreen, isEqual);
