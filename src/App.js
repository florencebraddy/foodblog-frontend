import React, { useEffect, useState } from "react";
import "./App.css";
import { Auth } from "aws-amplify";
import SignInPage from "./components/SignInPage";
import PrivateRoutes from "./pages/PrivateRoutes";
import PublicRoutes from "./pages/PublicRoutes";

//allows you to create a user
import { withAuthenticator } from "@aws-amplify/ui-react";

function App() {
  const [signedInUser, setSignedInUser] = useState(undefined);
  const [signInForm, setSignInForm] = useState({ username: "", password: "" });

  function signOut() {
    try {
      Auth.signOut({ global: true }).then(() => setSignedInUser(undefined));
    } catch (error) {
      console.log(error);
    }
  }

  async function signIn() {
    try {
      // testing purposes - never do this on a real app. Remove!!
      const user = await Auth.signIn(signInForm.username, signInForm.password);
      setSignedInUser(user);
      console.log(await Auth.currentAuthenticatedUser());
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    (async () => {
      const user = await Auth.currentAuthenticatedUser();
      setSignedInUser(user);
    })();
  }, []);

  if (!signedInUser) {
    return (
      <div className="App">
        <PublicRoutes
          signIn={signIn}
          setSignInForm={setSignInForm}
          signInForm={signInForm}
        />
        />
      </div>
    );
  }
  return <PrivateRoutes signOut={signOut} />;
}
// export default withAuthenticator(App);
export default App;
