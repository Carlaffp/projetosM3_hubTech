import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../providers/UserContext";

export const ProtectedRoutes = () => {
  const { user } = useContext(UserContext);
  return user ? <Outlet /> : <Navigate to="/" />;
};
