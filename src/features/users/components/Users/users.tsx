import { isEmpty } from "lodash";
import { ItemsWrapper } from "../../../common/components/ItemsWrapper";
import { User } from "../../types";
import { Avatar, Card, CardContent, CardHeader, IconButton, Stack, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { getLocalDate } from "../../../common/utils";
import { DeleteUser } from "../DeleteUser";
import { useDialog } from "../../../common/hooks/useDialog";
import { useState } from "react";

interface UsersProps {
  users: User[];
  loading: boolean;
  hasError: boolean;
}

export const Users = ({ users, loading, hasError }: UsersProps) => {
  const [email, setEmail] = useState<string | undefined>(undefined)
  const { open, handleOpen, handleClose } = useDialog();

  const onSelectUser = (email: string) => {
    setEmail(email);
    handleOpen();
  }

  return (<ItemsWrapper
    loading={loading}
    isEmpty={!loading && isEmpty(users) && !hasError}
    hasError={!loading && hasError}
    emptyMessage="No hay usuarios registrados"
    errorMessage="Error al intentar buscar usuarios"
  >
    <Stack gap={2}>
      {users.map(user => (
        <Card key={user.id}>
          <CardHeader
            avatar={
              <Avatar aria-label="avatar">
                {user.username[0] + user.username[1]}
              </Avatar>
            }
            action={
              <IconButton aria-label="delete" onClick={() => onSelectUser(user.email)}>
                <DeleteIcon />
              </IconButton>
            }
            title={user.username}
            subheader={user.email}
          />
          <CardContent>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Fecha de creación: {getLocalDate(user.created_at)}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Stack>
    <DeleteUser open={open} email={email} handleClose={handleClose} />
  </ItemsWrapper>)
};
