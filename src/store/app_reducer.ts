import {SLICE_NAME} from '@models/generalTypes'
import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface AppState {
    token: string
    loading: boolean
    theme: {
        dark: boolean
    }
}

const initialAppState: AppState = {
    token: '',
    loading: false,
    theme: {
        dark: false
    }
};

const appSlice = createSlice({
    name: SLICE_NAME.APP,
    initialState: initialAppState,
    reducers: {
        onSetToken: (state, {payload}: PayloadAction<string>) => {
            state.token = payload
        },
        onLoadApp: (state) => {
            state.loading = true
        },
        onLoadAppEnd: (state) => {
            state.loading = false
        },
        onSetDarkMode: (state, {payload}: PayloadAction<boolean>) => {
            state.theme.dark = payload
        },
        onLogout: (state) => {
            state.token = ''
        },
    },
});

export const appReducer = appSlice.reducer;

export const actionsApp = {
    ...appSlice.actions,
};
