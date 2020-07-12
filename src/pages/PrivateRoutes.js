import React from "react";
import { Router } from "@reach/router";
import Home from "../components/Home";
import NotFound from "../components/NotFound";

const PrivateRoutes = ({ signOut }) => {
  return (
    <Router>
      <Home path="/" signOut={signOut} />
      <NotFound default />
    </Router>
  );
};

export default PrivateRoutes;
