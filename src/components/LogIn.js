import React, { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { app } from "../firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LogIn = () => {
  const userContext = useContext(UserContext);

  const handleSubmit = (e) => {
    // do this to stop it refreshing the page on submit
    e.prevent.default();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="Email..." />
        <input placeholder="Enter your password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LogIn;
