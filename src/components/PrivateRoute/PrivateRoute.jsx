import { Navigate,  useLocation } from 'react-router-dom';
import  { useContext } from "react";
import { userContext } from "../../App";

const PrivateRoute = ({children}) => {
  const location = useLocation();
  const [token] = useContext(userContext);

  if (!token) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
};

export default PrivateRoute;
