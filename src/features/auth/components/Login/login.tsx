import { Button, TextField, Typography } from "@mui/material";
import { EMAIL, PASSWORD } from "../../constants";
import { Container, Form } from "./login.styles";
import { AuthForm } from "../../types";
import { Link } from "react-router-dom";
import { SubmitHandler } from "react-hook-form";
import { loginUser } from "../../services/user";
import { useAuthForm } from "../../hooks/useAuthForm";

export const Login = () => {
  const { register, handleSubmit, errors, disabled } = useAuthForm();

  const onSubmit: SubmitHandler<AuthForm> = (data) => loginUser(data);

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
        >
          Iniciar sesión
        </Button>
      </Form>
      <p>
        ¿No tienes cuenta? <Link to="/register">Regístrate</Link> para crear una.
      </p>
    </Container>
  );
};
