import React from "react";
import { Router } from "@reach/router";
import SignInPage from "../components/SignInPage";
import NotFound from "../components/NotFound";
import SignUp from "../components/SignUp";

const PublicRoutes = ({ signIn, setSignInForm, signInForm }) => {
  return (
    <Router>
      <SignInPage
        path="/"
        signIn={signIn}
        setSignInForm={setSignInForm}
        signInForm={signInForm}
      />
      <SignUp path="/signup" />
      <NotFound default />
    </Router>
  );
};

export default PublicRoutes;
