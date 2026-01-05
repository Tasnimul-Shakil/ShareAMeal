import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Riple } from "react-loading-indicators";
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className=" min-h-screen flex justify-center items-center">
        <Riple
          color="#3177cc"
          size="medium"
          text="loading.."
          textColor="#080808"
        />
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
