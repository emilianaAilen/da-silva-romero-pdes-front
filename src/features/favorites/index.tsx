import { Favorites as UserFavorites } from "./components/Favorites";
import { AdminFavorites } from "./components/AdminFavorites";
import { UserRole } from "../auth/services/types";

export const Favorites = () => {
  const role = localStorage.getItem('role');

  if (role === UserRole.admin) {
    return <AdminFavorites />
  }

  return <UserFavorites />;
}