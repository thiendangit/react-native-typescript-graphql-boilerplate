import {name as appName} from '../../app.json'

const CODE_DEFAULT = -200;
const CODE_SUCCESS = 200;
const ERROR_NETWORK_CODE = -100;
const RESULT_CODE_PUSH_OUT = 401;
const TIME_OUT = 10000;
const STATUS_TIME_OUT = 'ECONNABORTED';
const CODE_TIME_OUT = 408;
const APP_MODE = {
    DEV: 'dev',
    PROD: 'prod',
    STAGING: 'staging',
};

export {
    appName,
    CODE_DEFAULT,
    CODE_SUCCESS,
    ERROR_NETWORK_CODE,
    RESULT_CODE_PUSH_OUT,
    TIME_OUT,
    STATUS_TIME_OUT,
    CODE_TIME_OUT,
    APP_MODE
}
