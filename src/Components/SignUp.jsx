import React, { useState } from "react";
import { Link } from "@reach/router";
import { auth, generateUserDocument } from "../pages/firebase";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(null);
  const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
    event.preventDefault();
    try{
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      generateUserDocument(user, {displayName});
    }
    catch(error){
      setError('Error Signing up with email and password');
    }

    setEmail("");
    setPassword("");
    setDisplayName("");
  };
  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;
    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    }
  };
  return (
    <div>
      <header className="App-header">
        <div className="row justify-content-center">
          <div className="col">
            <h1>Sign Up</h1>
          </div>
        </div>
        {error !== null && (
          <div className="py-4 bg-red-600 w-full text-white text-center mb-3">
            {error}
          </div>
        )}
        <form>
          <div className="row justify-content-center">
            <div className="col">
              <label>
                Display Name:
              </label>
            </div>
            <div className="col">
              <input
                type="text"
                name="displayName"
                value={displayName}
                placeholder="username"
                id="displayName"
                onChange={event => onChangeHandler(event)}
              />
            </div>
          </div>
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
                value={email}
                placeholder="E.g: abc123@gmail.com"
                id="userEmail"
                onChange={event => onChangeHandler(event)}
              />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col">
              <label>
                Password:
              </label>
            </div>
            <div className="col">
              <input
                type="password"
                name="userPassword"
                value={password}
                placeholder="Your Password"
                id="userPassword"
                onChange={event => onChangeHandler(event)}
              />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col">
                <Button
                  onClick={event => {
                    createUserWithEmailAndPasswordHandler(event, email, password);
                  }}
                  block>
                  Sign up
                </Button>
            </div>
          </div>
                
        </form>
        <p className="text-center my-3">
          Already have an account?{" "}
          <Link to="/" className="text-blue-500 hover:text-blue-600">
            Sign in here
          </Link>
        </p>
      </header>
    </div>
  );
};
export default SignUp;