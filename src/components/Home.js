import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import { UserContext } from "../context/UserProvider";

export const Home = () => {
  // save the themeContext from the provider file into a variable
  const userContext = useContext(UserContext);
  const themeContext = useContext(ThemeContext);

  return (
    // if it is a dark theme (true) then add class called dark, else add light
    <main className={themeContext.isDarkTheme ? "dark" : "light"}>
      {/* passed down the object.user key */}
      <h1>Welcome home {userContext.user}</h1>
    </main>
  );
};
