import React, { createContext, useState } from "react";
import { Home } from "../components/Home";
import Nav from "../components/Nav";
import LogIn from "../components/LogIn";

// this is the way the data is passed around through the app, info is held in userContext.Initial value set to empty object
export const UserContext = createContext({});

// providing info for it's children components
const Provider = () => {
  const currentUser = {
    name: "Tamzin Boyd",
  };

  // currently set to the above object
  const [user, setUser] = useState(currentUser);

  return (
    // pass down to these componenets and all of their children too
    <UserContext.Provider value={user}>
      <Nav />
      <Home />
      <LogIn />
    </UserContext.Provider>
  );
};

export default Provider;
