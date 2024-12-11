import { isEmpty } from "lodash";
import { ItemsWrapper } from "../../../common/components/ItemsWrapper";
import { User } from "../../types";
import { Stack } from "@mui/material";
import { DeleteUser } from "../DeleteUser";
import { useDialog } from "../../../common/hooks/useDialog";
import { useState } from "react";
import { UserCard } from "../../../common/components/UserCard";

interface UsersProps {
  users: User[];
  loading: boolean;
  hasError: boolean;
}

export const Users = ({ users, loading, hasError }: UsersProps) => {
  const [email, setEmail] = useState<string | undefined>(undefined)
  const { open, handleOpen, handleClose } = useDialog();
  const userID = localStorage.getItem('id');

  const onSelectUser = (email: string) => {
    setEmail(email);
    handleOpen();
  }

  return (
    <ItemsWrapper
      loading={loading}
      isEmpty={!loading && isEmpty(users) && !hasError}
      hasError={!loading && hasError}
      emptyMessage="No hay usuarios registrados"
      errorMessage="Error al intentar buscar usuarios"
    >
      <Stack gap={2}>
        {users.filter(user => user.id !== userID).map(user => (
          <UserCard user={user} deleteUser={onSelectUser} key={user.id} />
        ))}
      </Stack>
      <DeleteUser open={open} email={email} handleClose={handleClose} />
    </ItemsWrapper>
  );
};
