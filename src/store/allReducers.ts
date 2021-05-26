import { combineReducers } from '@reduxjs/toolkit'

import { appReducer } from './app_reducer'

export const allReducer = combineReducers({
    app: appReducer
})

export type RootState = ReturnType<typeof allReducer>;
