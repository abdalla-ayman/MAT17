import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const PrivateRoutes = ({ children }) => {
  const context = useContext(UserContext);
  if (!context) {
    return <Navigate to="/signin" replace />;
  }

  return children;
};

export default PrivateRoutes;
