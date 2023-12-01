import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);
  };

  return (
    <div className="container">
      <center>
        <h1> LOGIN FORM </h1>
      </center>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form>
            <div className="form-group mb-4">
              <label htmlFor="form2Example1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                id="form2Example1"
                className="form-control"
                value={email}
                onChange={handleEmailChange}
              />
            </div>

            <div className="form-group mb-4">
              <label htmlFor="form2Example2" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="form2Example2"
                className="form-control"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>

            <div className="row mb-4">
              <div className="col">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={handleRememberMeChange}
                  />
                  <label className="form-check-label" htmlFor="form2Example31">
                    Remember me
                  </label>
                </div>
              </div>

              <div className="col text-end">
                <a href="#!" className="text">
                  Forgot password?
                </a>
              </div>
            </div>

            <button
              type="button"
              className="btn btn-primary btn-block mb-4"
              onClick={handleSubmit}
            >
              Sign in
            </button>

            <div className="text-center">
              <p>
                Not a member?{" "}
                <Link to="/SignUP">
                  <a href="#!">Register</a>
                </Link><br></br>
                <Link to="/" className="btn btn-outline-success me-3">
              Back
            </Link>
              </p>
              {/* <p>or sign up with:</p>
              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-facebook-f"></i>
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-google"></i>
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-twitter"></i>
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-github"></i>
              </button> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
