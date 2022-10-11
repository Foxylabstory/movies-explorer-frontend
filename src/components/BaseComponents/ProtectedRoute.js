import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  return props.loggedIn ? props.children : <Navigate to="/" />;
};

export default ProtectedRoute;