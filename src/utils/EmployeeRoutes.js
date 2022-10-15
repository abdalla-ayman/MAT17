import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const EmployeeRoutes = () => {
  const { user } = useContext(UserContext);

  return user.role == "employee" ? <Outlet /> : <Navigate to="/404" />;
};

export default EmployeeRoutes;
