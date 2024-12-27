import { Navigate, Outlet } from 'react-router-dom';

import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";
const PrivateRoute = () => {
  // const { userInfo } = useSelector((state) => state.auth);
  const { user } = useContext(GlobalContext);
  return user && user.isActive ? <Outlet /> : <Navigate to='/login' replace />;
};
export default PrivateRoute;
