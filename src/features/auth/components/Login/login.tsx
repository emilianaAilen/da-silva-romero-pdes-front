import { Button, TextField, Typography } from "@mui/material";
import { Container, Form } from "./login.styles";
import { EMAIL, PASSWORD } from "../../constants";

import { Link } from "react-router-dom";
import { LoginForm } from "../../types";
import { SubmitHandler } from "react-hook-form";
import { useLoginForm } from "../../hooks/useLoginForm";

interface LoginProps {
  onSubmit: SubmitHandler<LoginForm>;
}
export const Login = ({ onSubmit }: LoginProps) => {
  const { register, handleSubmit, errors, disabled } = useLoginForm();

  return (
    <Container>
      <Typography fontSize={30}>Iniciar sesión</Typography>
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
          error={!!errors[PASSWORD]}
          helperText={errors[PASSWORD]?.message || ""}
          type="password"
          fullWidth
          label="Contraseña"
          variant="outlined"
          {...register(PASSWORD)}
        />
        <Button
          disabled={disabled}
          onClick={handleSubmit(onSubmit)}
          sx={{ padding: 1, textTransform: "none", fontSize: 16 }}
          variant="contained"
          type="submit"
        >
          Iniciar sesión
        </Button>
      </Form>
      <p>
        ¿No tienes cuenta? <Link to="/register">Regístrate</Link> para crear
        una.
      </p>
    </Container>
  );
};
