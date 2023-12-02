import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegistrationForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };

  return (
    <div className="container">
        <center><h1>SIGNUP  FORM</h1></center>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form>
            <div className="form-group mb-4">
              <label htmlFor="fullName" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                className="form-control"
                value={fullName}
                onChange={handleFullNameChange}
              />
            </div>

            <div className="form-group mb-4">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={email}
                onChange={handleEmailChange}
              />
            </div>

            <div className="form-group mb-4">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-control"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>

            <div className="form-group mb-4">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="form-control"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
            </div>

            <button
              type="button"
              className="btn btn-primary btn-block mb-4"
              onClick={handleSubmit}
            >
              Register
            </button>

            <div className="text-center">
              
              
              Already have an account? <Link to="/login" ><a href="#!">Login</a>
            </Link>
           <br></br> <Link to="/" className="btn btn-outline-success me-3">
              Back
            </Link>
                
              
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
