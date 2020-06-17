import React, {useState} from "react";
import { Link } from "@reach/router";
import { auth } from "../pages/firebase";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const signInWithEmailAndPasswordHandler = (event, email, password) => {
      event.preventDefault();
      auth.signInWithEmailAndPassword(email, password).catch(error => {
        setError("Error signing in with password and email!");
        console.error("Error signing in with password and email", error);
      });
    };

      const onChangeHandler = (event) => {
          const {name, value} = event.currentTarget;

          if(name === 'userEmail') {
              setEmail(value);
          }
          else if(name === 'userPassword'){
            setPassword(value);
          }
      };

  return (
    <div>
      <header className="App-header">
        <div className="row justify-content-center">
          <div className="col">
            <h1>Sign In</h1>
          </div>
        </div>
        {error !== null && <div className = "py-4 bg-red-600 w-full text-white text-center mb-3">{error}</div>}
        <form>
            <div className="row justify-content-center">
              <div className="col">
                <label htmlFor="userEmail" className="block">
                  Email:
                </label>
              </div>
              <div className="col">
                <input
                  type="email"
                  name="userEmail"
                  value = {email}
                  placeholder="E.g: abc123@gmail.com"
                  id="userEmail"
                  onChange = {(event) => onChangeHandler(event)}
                />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col">
                <label htmlFor="userPassword" className="block">
                  Password:
                </label>
              </div>
              <div className="col">
                <input
                  type="password"
                  name="userPassword"
                  value = {password}
                  placeholder="Your Password"
                  id="userPassword"
                  onChange = {(event) => onChangeHandler(event)}
                />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col">
                <Button onClick = {(event) => {signInWithEmailAndPasswordHandler(event, email, password)}} block>
                  Sign in
                </Button>
              </div>
            </div>
        </form>
      
        <p className="text-center my-3">
          Don't have an account?{" "}
          <Link to="signUp" className="text-blue-500 hover:text-blue-600">
            Sign up here
          </Link>{" "}
          <br />{" "}
          <Link to = "passwordReset" className="text-blue-500 hover:text-blue-600">
            Forgot Password?
          </Link>
        </p>
      </header>
    </div>
  );
};
export default SignIn;
