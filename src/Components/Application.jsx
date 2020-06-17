import React, { useContext } from "react";
import { Router } from "@reach/router";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Base from "./Base";
import UserProvider, { UserContext } from "../Providers/UserProvider";
import PasswordReset from "./PasswordReset";

function Application() {
  const user = useContext(UserContext);
  return (
        user ?
        <Base email={user.email}/>
      :
      <div className="Home">
        <header className="App-header">
          <Router>
            <SignUp path="signUp" />
            <SignIn path="/" />
            <PasswordReset path = "passwordReset" />
          </Router>
        </header>
      </div>

  );
}
export default Application;