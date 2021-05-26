import {applyMiddleware, createStore, compose} from "redux";
import thunk from "redux-thunk";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {persistStore, persistReducer} from 'redux-persist';
import logger from 'redux-logger';
import {allReducer} from "@store/allReducers";

const devMode = __DEV__;
const middleware: any[] = [];

middleware.push(thunk);

const config: any = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: [''],
    timeout: null,
    debug: true //to get useful logging
};

if (devMode) {
    middleware.push(logger);
}

const enhancers = compose(applyMiddleware(...middleware));
const persistedReducer = persistReducer(config, allReducer);

const store = createStore(persistedReducer, enhancers);
let persist = persistStore(store);

const storeConfig = () => {
    return {persist, store};
};

export default storeConfig;
