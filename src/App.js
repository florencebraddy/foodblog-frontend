import React, { useState } from "react";
import "./App.css";
import { Auth } from "aws-amplify";
// import { withAuthenticator } from "@aws-amplify/ui-react";

function App() {
  const [signedInUser, setSignedInUser] = useState(undefined);
  const [signInForm, setSignInForm] = useState([
    { username: "", password: "" }
  ]);

  async function signOut() {
    try {
      await Auth.signOut({ global: true }).then(() => {
        window.location = "";
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function signIn() {
    try {
      console.log(await Auth.currentAuthenticatedUser());
      // testing purposes - never do this on a real app. Remove!!
      console.log(signInForm);
      const user = await Auth.signIn(signInForm.username, signInForm.password);
      setSignedInUser(user);
    } catch (error) {
      console.log(error);
    }
  }


//   useEffect(() => {
//     (async () => console.log(await Auth.currentAuthenticatedUser()))();
//   }, []);
// console.log(signInForm)-to check signInForm is working
return (
  <div className="App">
    <button onClick={signOut}>Logout</button>
    <div>
      <input
        onChange={(e) =>
          setSignInForm({ ...signInForm, username: e.target.value })
        }
      />
      <input
        type="password"
        onChange={(e) =>
          setSignInForm({ ...signInForm, password: e.target.value })
        }
      />
      <button onClick={signIn}>Sign In</button>
    </div>
    <h1>Profile Page!</h1>
  </div>
);
      }
// export default withAuthenticator(App);
export default App;
