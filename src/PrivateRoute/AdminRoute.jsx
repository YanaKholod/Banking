import React from "react";
import { Navigate } from "react-router-dom";
import CompaniesForAdmin from "../Companies/CompaniesForAdmin";

export const AdminRoute = ({ user }) => {
  if (user.role === "admin") {
    <CompaniesForAdmin />;
  } else {
    return <Navigate to="/" />;
  }
};

export default AdminRoute;
