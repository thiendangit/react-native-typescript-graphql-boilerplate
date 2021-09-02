import {ApolloError, useMutation} from '@apollo/client';
import {FormResult, useForm} from '@lib/logic/app/useForm';
import {
  CREATE_NEW_CUSTOMER,
  CreateNewCustomerType,
  CreateNewCustomerVars,
} from '@lib/apollo/mutations/createNewCustomer';

export interface RegisterForm {
  email: string
  password: string
  firstname: string
  lastname: string
  secureTextEntry: boolean
}

interface Result<Values> extends FormResult<Values> {
  loading: boolean
  data?: CreateNewCustomerType | null
  error?: ApolloError
}

export const useRegister = (): Result<RegisterForm> => {
  const [createNewCustomer, {loading, data, error}] = useMutation<
    CreateNewCustomerType,
    CreateNewCustomerVars
  >(CREATE_NEW_CUSTOMER);

  const {values, handleChange, handleSubmit} = useForm<RegisterForm>({
    initialValues: {
      email: '',
      password: '',
      firstname: '',
      lastname: '',
      secureTextEntry: true,
    },
    onSubmit: async (_values: CreateNewCustomerVars) => {
      try {
        console.log(
          _values.email,
          _values.password,
          _values.firstname,
          _values.lastname,
        );
        await createNewCustomer({
          variables: {
            email: _values.email,
            password: _values.password,
            firstname: _values.firstname,
            lastname: _values.lastname,
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
