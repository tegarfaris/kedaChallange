import LoginPage from "@kedachallange/app/sections/login-page";
import { NextPageWithLayout } from "@kedachallange/pages/_app";
import React from "react";

const Login: NextPageWithLayout = () => {
  return <LoginPage />;
};

Login.getLayout = (page: React.ReactNode) => {
  return <>{page}</>;
};

export default Login;
