import { Button, TextField, Typography } from "@mui/material";
import { CONFIRM_PASSWORD, EMAIL, NAME, PASSWORD } from "../../constants";
import { Container, Form } from "./register.styles";

import { AuthForm } from "../../types";
import { Link } from "react-router-dom";
import { SubmitHandler } from "react-hook-form";
import { useAuthForm } from "../../hooks/useAuthForm";

export const Register = () => {
  const { register, handleSubmit, errors, disabled } = useAuthForm();

  const onSubmit: SubmitHandler<AuthForm> = (data) => console.log(data);

  return (
    <Container>
      <Typography fontSize={30}>Registro</Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          error={!!errors[EMAIL]}
          helperText={errors[EMAIL]?.message || ""}
          type={EMAIL}
          fullWidth
          label="Email"
          variant="outlined"
          {...register(EMAIL)}
        />
        <TextField
          error={!!errors[NAME]}
          helperText={errors[NAME]?.message || ""}
          type="text"
          fullWidth
          label="Nombre"
          variant="outlined"
          {...register(NAME)}
        />
        <TextField
          error={!!errors[PASSWORD]}
          helperText={errors[PASSWORD]?.message || ""}
          type="text"
          fullWidth
          label="Contraseña"
          variant="outlined"
          {...register(PASSWORD)}
        />
        <TextField
          error={!!errors[CONFIRM_PASSWORD]}
          helperText={errors[CONFIRM_PASSWORD]?.message || ""}
          type="text"
          fullWidth
          label="Confirmar contraseña"
          variant="outlined"
          {...register(CONFIRM_PASSWORD)}
        />
        <Button
          disabled={disabled}
          onClick={handleSubmit(onSubmit)}
          sx={{ padding: 1, textTransform: "none", fontSize: 16 }}
          variant="contained"
        >
          Registrarme
        </Button>
      </Form>
      <p>
        ¿Ya estás registrado/a? <Link to="/">Inicia sesión</Link> para acceder a
        tu perfil.
      </p>
    </Container>
  );
};
