import React, {memo} from 'react'
import isEqual from 'react-fast-compare'
import {useTranslation} from 'react-i18next'
import {FlatList, View} from 'react-native'
import {dispatch} from '@common/redux'
import {scale} from '@common/scale'
import Container from '@components/container'
import styled from '@emotion/native'
import {actionsApp} from '@store/app_reducer'
import {Button, Text, Thumbnail} from 'native-base'
import {useCategoryProducts} from "@lib/logic/product/useCategoryProducts";
import {deviceWidth} from "@lib/utils";
import {formatMoney} from "@utils/money/money";
import {ColorsCustom} from "@themes/color";

const FlatListContainer = styled(Container)({
    alignItems: 'stretch',
    justifyContent: 'flex-start',
});

const LaunchesScreen: React.FC = () => {
    const {t} = useTranslation();

    const {data} = useCategoryProducts({categoryId: "2"});

    console.log({data});

    const onLogout = async () => {
        dispatch(actionsApp.onLogout())
    };

    // if (isLoading) return <ActivityIndicator size="large" color={theme.primary}/>;

    return (
        <FlatListContainer>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>

                <Text>RN Graphql Boilerplate</Text>
                <FlatList data={data?.products?.items} keyExtractor={(item, index) => index.toString()}
                          renderItem={({item}) => {
                              return <View style={{
                                  height: scale(70),
                                  backgroundColor: ColorsCustom.white,
                                  marginTop: scale(10),
                                  width: deviceWidth - scale(20),
                                  flexDirection: 'row',
                                  marginHorizontal: scale(10),
                                  shadowColor: "#000",
                                  shadowOffset: {
                                      width: 0,
                                      height: 2,
                                  },
                                  shadowOpacity: 0.25,
                                  shadowRadius: 3.84,

                                  elevation: 5,
                              }}>
                                  <Thumbnail source={{uri: item.image.url}}/>
                                  <View>
                                      <Text>
                                          {item.name}
                                      </Text>
                                  </View>
                                  <Text>
                                      {formatMoney(item?.price_range?.minimum_price?.regular_price.value)}
                                  </Text>
                              </View>
                          }}/>
                <Button
                    style={{alignSelf: 'center', marginTop: scale(15)}}
                    onPress={onLogout}>
                    <Text style={{color: 'white'}}> {t('logout')} </Text>
                </Button>
            </View>
        </FlatListContainer>
    )
};

export const Launches = memo(LaunchesScreen, isEqual);
