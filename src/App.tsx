import React, { useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { ApolloClient, ApolloProvider } from '@apollo/client';
import { getApolloClient } from '@lib/apollo/client';
import storeConfig from '@store/store';
import I18n from '@utils/i18n/i18n';
import { Root, Spinner } from 'native-base';
import { PersistGate } from 'redux-persist/integration/react';
import 'react-native-gesture-handler';
import AppNavigation from './navigation';
import ThemeManager from '@themes/index';

const App: React.FC = () => {
  const [client, setClient] = useState<ApolloClient<any> | any>();

  useEffect(() => {
    getApolloClient()
      .then(setClient)
      .catch((e) => console.log(e));
  }, []);

  const { store, persist } = storeConfig();

  if (client) {
    return (
      <ApolloProvider client={client}>
        <PersistGate persistor={persist}>
          <Provider store={store}>
            <I18nextProvider i18n={I18n}>
              <ThemeManager>
                <Root>
                  <AppNavigation />
                </Root>
              </ThemeManager>
            </I18nextProvider>
          </Provider>
        </PersistGate>
      </ApolloProvider>
    );
  } else {
    return <Spinner />;
  }
};

export default App;
