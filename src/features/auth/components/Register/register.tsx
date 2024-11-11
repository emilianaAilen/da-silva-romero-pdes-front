import { Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material";
import { CONFIRM_PASSWORD, EMAIL, PASSWORD, USERNAME } from "../../constants";
import { Container, Form } from "./register.styles";

import { AuthForm } from "../../types";
import { Link } from "react-router-dom";
import { SubmitHandler } from "react-hook-form";
import { registerUser } from "../../services/auth";
import { useAuthForm } from "../../hooks/useAuthForm";
import { useState } from "react";
import { UserRole } from "../../services/types";

export const Register = () => {
  const [role, setRole] = useState(UserRole.user);
  const { register, handleSubmit, errors, disabled } = useAuthForm();

  const handleChangeRole = (event: SelectChangeEvent) => {
    setRole(event.target.value as UserRole);
  };

  const onSubmit: SubmitHandler<AuthForm> = (data) => registerUser({ ...data, roleType: role });

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
          error={!!errors[USERNAME]}
          helperText={errors[USERNAME]?.message || ""}
          type="text"
          fullWidth
          label="Nombre"
          variant="outlined"
          {...register(USERNAME)}
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
        <FormControl>
          <InputLabel id="role-label">Rol</InputLabel>
          <Select
            labelId="role-label"
            fullWidth
            value={role}
            label="Rol"
            onChange={handleChangeRole}
          >
            <MenuItem value={UserRole.user}>User</MenuItem>
            <MenuItem value={UserRole.admin}>Admin</MenuItem>
          </Select>
        </FormControl>
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
        ¿Ya estás registrado/a? <Link to="/login">Inicia sesión</Link> para
        acceder a tu perfil.
      </p>
    </Container>
  );
};
