import {ApolloError, useMutation} from '@apollo/client'
import {dispatch} from '@common/redux'
import {
    CREATE_CUSTOMER_TOKEN,
    CreateCustomerTokenDataType,
    CreateCustomerTokenVars,
} from '@lib/apollo/mutations/createCustomerToken'
import {IS_LOGGED_IN} from '@lib/apollo/queries/isLoggedIn'
import {FormResult, useForm} from '@lib/logic/app/useForm'
import {actionsApp} from '@store/app_reducer'
import {saveCustomerToken} from "@utils/storage/storage";
import {Toast} from "native-base";
import {err} from "react-native-svg/lib/typescript/xml";
import {useTranslation} from "react-i18next";
import {useTheme} from "@react-navigation/native";

export interface LoginForm {
    email: string
    password: string
    secureTextEntry: boolean
}

interface Result<Values> extends FormResult<Values> {
    loading: boolean
    data?: CreateCustomerTokenDataType | null
    error?: ApolloError
}

export const useLogin = (): Result<LoginForm> => {

    const {t} = useTranslation();
    const {colors} = useTheme();

    const [createCustomerToken, {loading, data, error}] = useMutation<CreateCustomerTokenDataType,
        CreateCustomerTokenVars>(CREATE_CUSTOMER_TOKEN, {
        async update(cache, {data: _data}) {
            const token = _data?.generateCustomerToken?.token;

            if (token) {
                await saveCustomerToken(token);
                dispatch(actionsApp.onSetToken(token));
                cache.writeQuery({
                    query: IS_LOGGED_IN,
                    data: {
                        isLoggedIn: true,
                    },
                })
            }
        },
    });

    const {values, handleChange, handleSubmit} = useForm<LoginForm>({
        initialValues: {
            email: '',
            password: '',
            secureTextEntry: true,
        },
        onSubmit: async (_values: { email: any; password: any }) => {
            try {
                await createCustomerToken({
                    variables: {
                        email: _values.email,
                        password: _values.password,
                    },
                });
            } catch {
            }
            if (error) {
                Toast.show({
                    text: error?.message,
                    buttonText: t("OK"),
                    duration: 3000,
                    style: {
                        backgroundColor: colors.text
                    },
                    textStyle: {
                        color: colors.background
                    },
                    buttonTextStyle: {
                        color: colors.background
                    }
                })
            }
        },
    });

    return {
        values,
        data,
        error,
        loading,
        handleChange,
        handleSubmit,
    }
};
