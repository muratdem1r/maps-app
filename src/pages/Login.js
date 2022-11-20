import React from "react";
import { Navigate } from "react-router-dom";

// Styles
import styles from "../assets/styles/Login.module.css";

// Components
import LoginForm from "../components/LoginForm";

import checkLoggedin from "../helpers/checkLoggedin";

function Login() {
  if (checkLoggedin()) {
    return <Navigate to="/" />;
  }
  return (
    <div className={styles.login}>
      <LoginForm />
    </div>
  );
}

export default Login;
