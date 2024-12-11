import { Avatar, Card, CardContent, CardHeader, IconButton, Typography } from "@mui/material"
import { User } from "../../../users/types"
import DeleteIcon from '@mui/icons-material/Delete';
import { getLocalDate } from "../../utils";
import { TopUser } from "../../../reports/types";

interface UserCardProps {
  user: User | TopUser,
  deleteUser?: (email: string) => void;
}

export const UserCard = ({ user, deleteUser }: UserCardProps) => (
  <Card>
    <CardHeader
      avatar={
        <Avatar aria-label="avatar">
          {user.username[0] + user.username[1]}
        </Avatar>
      }
      action={
        deleteUser && (
          <IconButton aria-label="delete" onClick={() => deleteUser(user.email)}>
            <DeleteIcon />
          </IconButton>
        )
      }
      title={user.username}
      subheader={user.email}
    />
    <CardContent>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Fecha de creación: {getLocalDate(user.created_at)}
      </Typography>
      {(user as TopUser).cantPurchasesProducts && (
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Compras Realizadas: {(user as TopUser).cantPurchasesProducts}
        </Typography>
      )}
    </CardContent>
  </Card>
);