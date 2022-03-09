import React, { useContext } from "react";
import { NavMenu } from "./NavMenu";
import { ThemeContext } from "../context/ThemeProvider";

const Nav = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <nav className={themeContext.isDarkTheme ? "dark" : "light"}>
      <button onClick={themeContext.toggleTheme}>Toggle theme</button>
      <h1>MazinApp</h1>
      <NavMenu />
    </nav>
  );
};

export default Nav;
