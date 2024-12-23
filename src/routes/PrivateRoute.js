import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => {
  const isLogin = localStorage.getItem("isLogin");
  const [isAuthenticated] = useState(isLogin === "1");

  return isAuthenticated ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
