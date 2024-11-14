import * as Yup from 'yup';

import { AuthForm } from '../types';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('El email no es válido')
    .required('El email es obligatorio'),
  username: Yup.string()
    .required('El nombre es obligatorio')
    .min(3, 'El nombre debe tener al menos 3 caracteres'),
  password: Yup.string()
    .required('La contraseña es obligatoria')
    .min(8, 'La contraseña debe tener al menos 8 caracteres')
    .matches(/[a-z]/, 'La contraseña debe contener al menos una letra minúscula')
    .matches(/[A-Z]/, 'La contraseña debe contener al menos una letra mayúscula')
    .matches(/[0-9]/, 'La contraseña debe contener al menos un número'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Las contraseñas deben coincidir')
    .required('La confirmación de la contraseña es obligatoria'),
});

export const useAuthForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<AuthForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      username: ''
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