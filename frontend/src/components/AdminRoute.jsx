import { Navigate, Outlet } from 'react-router-dom';
import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";

const AdminRoute = () => {
  const { user } = useContext(GlobalContext);
  return user && user.isAdmin ? (
    <Outlet />
  ) : (
    <Navigate to='/login' replace />
  );
};
export default AdminRoute;
