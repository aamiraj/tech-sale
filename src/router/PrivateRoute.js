import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../comps/Loading";
import { AuthContext } from "../contexts/UserContext";


const Private = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);
  const location = useLocation();

  if (isLoading) {
     return (<><Loading/></>
       
    );
   }

  if (!user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default Private;