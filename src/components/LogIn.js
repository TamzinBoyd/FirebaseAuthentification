import React, { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { firestore } from "../firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LogIn = () => {
  // import UserContext object
  const userContext = useContext(UserContext);

  const handleSubmit = (e) => {
    // stop it refreshing the page on submit
    e.preventDefault();

    // get value from inpout boxes
    const email = e.target[0].value;
    const password = e.target[1].value;

    // inbuilt function, getAuth funct passes in the in firebase.js file then the values from form as saved in variables above
    // returns a promise
    signInWithEmailAndPassword(getAuth(firestore), email, password).then(
      ((response) => {
        //   it returns a user credential, given as a user then you can access their email (this isn't related to above variable). setUser is the function to update state, so we're changing the value of user (state) to the response object.user.email - so now the user's email shows on the screen rather than their name
        userContext.setUser(response.user.email);
        alert("Welcome back!");
      }).catch((e) => {
        alert("Sorry, something went wrong");
      })
    );
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
