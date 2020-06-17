import React, { useState } from "react";
import { auth } from "../pages/firebase";
import { Link } from "@reach/router";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
  const [error, setError] = useState(null);

  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;
    if (name === "userEmail") {
      setEmail(value);
    }
  };
  const sendResetEmail = event => {
    event.preventDefault();
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        setEmailHasBeenSent(true);
        setTimeout(() => {setEmailHasBeenSent(false)}, 3000);
      })
      .catch(() => {
        setError("Error resetting password");
      });
  };
  return (
    <div>
      <header className="App-header">
        <div className="row justify-content-center">
          <div className="col">
            <h1>
              Reset your Password
            </h1>
          </div>
        </div>
        <form action="">
          {emailHasBeenSent && (
            <div>
              An email has been sent to you!
            </div>
          )}
          {error !== null && (
            <div>
              {error}
            </div>
          )}
          <div className="row justify-content-center">
            <div className="col">
              <label>
                Email:
              </label>
            </div>
            <div className="col">
              <input
                type="email"
                name="userEmail"
                id="userEmail"
                value={email}
                placeholder="Input your email"
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col">
              <Button
                onClick={event => {
                  sendResetEmail(event);
                }}
              block>
                Send me a reset link
              </Button>
            </div>
          </div>
        </form>
        <Link
         to ="/"
          className="my-2 text-blue-700 hover:text-blue-800 text-center block"
        >
          &larr; back to sign in page
        </Link>
        </header>
    </div>
  );
};
export default PasswordReset;