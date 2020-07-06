import React from "react";

const SignInPage = ({ signIn, setSignInForm, signInForm }) => {
  return (
    <div>
      <input
        onChange={e =>
          setSignInForm({ ...signInForm, username: e.target.value })
        }
      />
      <input
        type="password"
        onChange={e =>
          setSignInForm({ ...signInForm, password: e.target.value })
        }
      />
      <button onClick={signIn}>Sign In</button>
    </div>
  );
};
export default SignInPage;
