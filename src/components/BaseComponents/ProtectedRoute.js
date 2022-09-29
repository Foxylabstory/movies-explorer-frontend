import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  return props.loggedIn ? <Outlet /> : <Navigate to="/signin" />;
};

export default ProtectedRoute;