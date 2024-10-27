import { Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";

interface ProtectedRouteProps {
  children: JSX.Element;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const [cookies] = useCookies(["token"]);
  const isAuthenticated = !!cookies.token;

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};
