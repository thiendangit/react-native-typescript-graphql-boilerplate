import AsyncStorage from '@react-native-async-storage/async-storage'
import { allReducer } from '@store/allReducers'
import { applyMiddleware, compose,createStore } from 'redux'
import logger from 'redux-logger'
import { persistReducer,persistStore } from 'redux-persist'
import thunk from 'redux-thunk'

const devMode = __DEV__
const middleware: any[] = []

middleware.push(thunk)

const config: any = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: [''],
    timeout: null,
    debug: true // to get useful logging
}

if (devMode)
    middleware.push(logger)


const enhancers = compose(applyMiddleware(...middleware))
const persistedReducer = persistReducer(config, allReducer)

const store = createStore(persistedReducer, enhancers)
const persist = persistStore(store)

const storeConfig = () => {
    return { persist, store }
}

export default storeConfig
