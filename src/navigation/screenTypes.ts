export enum APP_SCREEN {
    UN_AUTHORIZE = 'UN_AUTHORIZE',
    SPLASH = 'SPLASH',
    LOGIN = 'LOGIN',
    REGISTER = 'REGISTER',
    REGISTER_BY_SUPPLIER = "REGISTER_BY_SUPPLIER",
    AUTHORIZE = 'AUTHORIZE',
    HOME = 'HOME',
}

export type RootStackParamList = {
    [APP_SCREEN.UN_AUTHORIZE]: undefined;
    [APP_SCREEN.AUTHORIZE]: undefined;
    [APP_SCREEN.SPLASH]: undefined;
    [APP_SCREEN.LOGIN]: undefined;
    [APP_SCREEN.REGISTER_BY_SUPPLIER]: undefined;
    [APP_SCREEN.REGISTER]: undefined;
    [APP_SCREEN.HOME]: undefined;
};

export type RootStackParamListType = keyof RootStackParamList;
