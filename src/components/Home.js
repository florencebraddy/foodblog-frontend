import React from "react";

export default function Home({ signOut }) {
  return <button onClick={signOut}>Logout</button>;
}
