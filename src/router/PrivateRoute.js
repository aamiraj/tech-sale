import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";

const Private = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  // if (!isLoading && user) {
  //   return (<><Loading/></>
  //     
  //   );
  // }

  if (!user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default Private;