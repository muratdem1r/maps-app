import React from "react";
import { Navigate } from "react-router-dom";

import checkLoggedin from "helpers/checkLoggedin";

// Components
import Container from "components/Container";

function ProtectedRoute() {
  if (checkLoggedin()) {
    return <Container />;
  }
  return <Navigate to="/login" />;
}

export default ProtectedRoute;
