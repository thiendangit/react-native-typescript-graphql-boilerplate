import { SLICE_NAME } from '@models/generalTypes'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AppState {
  token: string
  loading: boolean
}

const initialAppState: AppState = {
  token: '',
  loading: false,
};

const appSlice = createSlice({
  name: SLICE_NAME.APP,
  initialState: initialAppState,
  reducers: {
    onSetToken: (state, { payload }: PayloadAction<string>) => {
      state.token = payload
    },
    onLoadApp: (state) => {
      state.loading = true
    },
    onLoadAppEnd: (state) => {
      state.loading = false
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
