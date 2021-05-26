import React, {useEffect, useState} from 'react'
import 'react-native-gesture-handler'
import AppNavigation from './navigation'
import ThemeManager from './themes'
import {getApolloClient} from "@lib/apollo/client";
import {ApolloClient, ApolloProvider} from "@apollo/client";
import {Spinner} from "native-base";
import {Provider} from "react-redux";
import storeConfig from "@src/store/store";
import {PersistGate} from "redux-persist/integration/react";
import {I18nextProvider} from "react-i18next";
import I18n from '@utils/i18n/i18n';
import {Root} from "native-base";

const App: React.FC = () => {


    const [client, setClient] = useState<ApolloClient<any> | any>();

    useEffect(() => {
        getApolloClient()
            .then(setClient)
            .catch(e => console.log(e));
    }, []);

    let {store, persist} = storeConfig();

    if (client) {
        return (
            <PersistGate persistor={persist}>
                <Provider store={store}>
                    <Root>
                        <ApolloProvider client={client}>
                            <I18nextProvider i18n={I18n}>
                                <ThemeManager>
                                    <AppNavigation/>
                                </ThemeManager>
                            </I18nextProvider>
                        </ApolloProvider>
                    </Root>
                </Provider>
            </PersistGate>
        )
    } else {
        return <Spinner/>
    }
};

export default App
