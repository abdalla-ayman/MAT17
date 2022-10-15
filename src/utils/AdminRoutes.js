import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const AdminRoutes = () => {
  const { user } = useContext(UserContext);

  return user.role == "admin" ? <Outlet /> : <Navigate to="/404" />;
};

export default AdminRoutes;
