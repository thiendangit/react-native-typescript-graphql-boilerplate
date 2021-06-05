import { SLICE_NAME } from '@models/generalTypes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
  token: string
  loading: boolean
  theme: {
    dark: boolean
  }
  toast: {
    isToast: boolean
    msg: string
  }
}

const initialAppState: AppState = {
  token: '',
  loading: false,
  theme: {
    dark: false,
  },
  toast: {
    isToast: false,
    msg: '',
  },
};

const appSlice = createSlice({
  name: SLICE_NAME.APP,
  initialState: initialAppState,
  reducers: {
    onSetToken: (state, { payload }: PayloadAction<string>) => {
      state.token = payload;
    },
    onLoadApp: (state) => {
      state.loading = true;
    },
    onLoadAppEnd: (state) => {
      state.loading = false;
    },
    onSetDarkMode: (state, { payload }: PayloadAction<boolean>) => {
      state.theme.dark = payload;
    },
    addToast: (
      state,
      {
        payload,
      }: PayloadAction<{
        msg: string
      }>,
    ) => {
      state.toast = {
        msg: payload.msg,
        isToast: true,
      };
    },
    removeToast: (state) => {
      state.toast = {
        msg: '',
        isToast: false,
      };
    },
    onLogout: (state) => {
      state.token = '';
    },
  },
});

export const appReducer = appSlice.reducer;

export const actionsApp = {
  ...appSlice.actions,
};
