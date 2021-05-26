import React, {memo} from 'react'
import {
    View,
} from 'react-native'
import styled from '@emotion/native'

import Container from '@components/container'
import isEqual from "react-fast-compare";
import {Button, Text} from "native-base";
import {dispatch, scale} from "@src/common";
import {actionsApp} from "@src/store/app_reducer";
import {useTranslation} from "react-i18next";
import {Title} from "@containers/login/styles";

const FlatListContainer = styled(Container)({
    alignItems: 'stretch',
    justifyContent: 'flex-start',
});

const LaunchesScreen: React.FC = () => {

    const {t} = useTranslation();

    const onLogout = async () => {
        dispatch(actionsApp.onLogout())
    };

    // if (isLoading) return <ActivityIndicator size="large" color={theme.primary}/>;

    return (
        <FlatListContainer>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                {/*<FlatList*/}
                {/*    scrollEventThrottle={16}*/}
                {/*    data={data?.launchesPast}*/}
                {/*    renderItem={renderLaunch}*/}
                {/*    keyExtractor={item => item.mission_name}*/}
                {/*    refreshControl={*/}
                {/*        <RefreshControl*/}
                {/*            refreshing={isFetching}*/}
                {/*            onRefresh={refetch}*/}
                {/*            tintColor={theme.text}*/}
                {/*            colors={[theme.text]}*/}
                {/*        />*/}
                {/*    }*/}
                {/*/>*/}
                <Text>
                    RN Graphql Boilerplate
                </Text>
                <Button
                    style={{alignSelf: 'center', marginTop: scale(15)}}
                    onPress={onLogout}>
                    <Text style={{color: "white"}}> {t("logout")} </Text>
                </Button>
            </View>
        </FlatListContainer>
    )
};

export const Launches = memo(LaunchesScreen, isEqual);
