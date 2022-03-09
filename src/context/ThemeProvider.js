import React, { createContext, useState } from "react";
import UserProvider from "./UserProvider";
// this gets imported by the children components
export const ThemeContext = createContext({});

const ThemeProvider = () => {
  //  store the theme as boolean in state
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    //   set darkTheme to whatever it currently isn't true/false
    // We pass this down later to be used in a button
    setIsDarkTheme(!isDarkTheme);
  };
  // this data needs to stored as a object to pass it down for use,
  // 1 is the state, 2 is the toggle function
  const themeData = {
    isDarkTheme: isDarkTheme,
    toggleTheme: toggleTheme,
  };

  return (
    // pass in theme data object for use as a prop
    <ThemeContext.Provider value={themeData}>
      <UserProvider />
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
