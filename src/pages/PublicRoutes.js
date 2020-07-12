import React from "react";
import { Router } from "@reach/router";
import SignInPage from "../components/SignInPage";
import NotFound from "../components/NotFound";

const PublicRoutes = ({ signIn, setSignInForm, signInForm }) => {
  return (
    <Router>
      <SignInPage
        path="/"
        signIn={signIn}
        setSignInForm={setSignInForm}
        signInForm={signInForm}
      />
      <NotFound default />
    </Router>
  );
};

export default PublicRoutes;
