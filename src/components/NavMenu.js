import React, { useContext } from "react";
import { UserContext } from "../context/UserProvider";

export const NavMenu = () => {
  const data = useContext(UserContext);

  return (
    <div>
      <label for="users">Choose a user:</label>

      <select name="user" id="user">
        <option value="john">{data.name}</option>
        {/*<option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option> */}
      </select>
    </div>
  );
};
