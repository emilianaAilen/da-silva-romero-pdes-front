import * as Yup from 'yup';

import { LoginForm } from '../types';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('El email no es válido')
    .required('El email es obligatorio'),
  password: Yup.string()
    .required('La contraseña es obligatoria')
});

export const useLoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<LoginForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: ''
    },
    mode: 'onChange',
  });

  return {
    register,
    handleSubmit,
    errors,
    disabled: isDirty && !isValid
  }
}