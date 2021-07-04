import { ApolloError, useMutation } from '@apollo/client';
import { dispatch } from '@common/redux';
import {
  CREATE_CUSTOMER_TOKEN,
  CreateCustomerTokenDataType,
  CreateCustomerTokenVars,
} from '@lib/apollo/mutations/createCustomerToken';
import { IS_LOGGED_IN } from '@lib/apollo/queries/isLoggedIn';
import { FormResult, useForm } from '@lib/logic/app/useForm';
import { actionsApp } from '@store/app_reducer';
import { saveCustomerToken } from '@utils/storage/storage';

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
  const [createCustomerToken, { loading, data, error }] = useMutation<
    CreateCustomerTokenDataType,
    CreateCustomerTokenVars
  >(CREATE_CUSTOMER_TOKEN, {
    async update(cache, { data: _data }) {
      const token = _data?.generateCustomerToken?.token;

      if (token) {
        await saveCustomerToken(token);
        dispatch(actionsApp.onSetToken(token));
        cache.writeQuery({
          query: IS_LOGGED_IN,
          data: {
            isLoggedIn: true,
          },
        });
      }
    },
  });

  const { values, handleChange, handleSubmit } = useForm<LoginForm>({
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
      } catch {}
    },
  });

  return {
    values,
    data,
    error,
    loading,
    handleChange,
    handleSubmit,
  };
};
