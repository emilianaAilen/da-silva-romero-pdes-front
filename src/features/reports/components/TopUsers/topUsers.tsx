import { isEmpty } from "lodash";
import { ItemsWrapper } from "../../../common/components/ItemsWrapper";
import { Stack } from "@mui/material";
import { UserCard } from "../../../common/components/UserCard";
import { TopUser } from "../../types";

interface TopUsersProps {
  users: TopUser[];
  loading: boolean;
  hasError: boolean;
}

export const TopUsers = ({ users, loading, hasError }: TopUsersProps) => (
  <ItemsWrapper
    loading={loading}
    isEmpty={!loading && isEmpty(users) && !hasError}
    hasError={!loading && hasError}
    emptyMessage="No hay usuarios con compras realizadas"
    errorMessage="Error al intentar obtener el top de usuarios"
  >
    <Stack gap={2}>
      {users.map(user => (
        <UserCard user={user} key={user.id} />
      ))}
    </Stack>
  </ItemsWrapper>
)