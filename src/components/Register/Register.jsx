import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import './Register.css';
const patterns = {
  username: /^[a-z\d]{5,12}$/i,
  password: /^[\d\w@-]{8,20}$/i,
  email: /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  phone: /^\d{3}-\d{3}-\d{4}$/
};

const Register = () => {
  const [formState, setFormState] = useState({
    username: '',
    password: '',
    email: '',
    phone: ''
  });
  const UserCreatedToast = () => {
    toast('User created successfully!');
  };
  const [validity, setValidity] = useState({
    username: null,
    password: null,
    email: null,
    phone: null
  });

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const formIsValid = Object.values(validity).every(
      (value) => value === true
    );
    setIsFormValid(formIsValid);
  }, [validity]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormState((prev) => ({ ...prev, [id]: value }));
    setValidity((prev) => ({ ...prev, [id]: patterns[id].test(value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      UserCreatedToast();
      console.log('Form submitted:', formState);
    } else {
      console.log('Form is not valid');
    }
  };

  return (
    <div className="container">
      <Toaster
        gutter={10}
        toastOptions={{
          style: {
            padding: '16px',
            boxShadow: 'none',
            border: '1px solid black',
            borderRadius: '0px'
          }
        }}
        position="bottom-right"
        reverseOrder={true}
      />
      <div className="row">
        <div className="form-container">
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className={`form-control ${validity.username === null ? '' : validity.username ? 'valid' : 'invalid'}`}
                id="username"
                placeholder="Enter your username"
                value={formState.username}
                onChange={handleChange}
              />
              <small id="usernameHelp" className="form-text">
                Username must be between 5 - 12 characters.
              </small>
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className={`form-control ${validity.password === null ? '' : validity.password ? 'valid' : 'invalid'}`}
                id="password"
                placeholder="Enter your password"
                value={formState.password}
                onChange={handleChange}
              />
              <small id="passwordHelp" className="form-text">
                Password must be alphanumeric, 8 - 20 characters (@, _ and - are
                allowed).
              </small>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className={`form-control ${validity.email === null ? '' : validity.email ? 'valid' : 'invalid'}`}
                id="email"
                placeholder="@"
                value={formState.email}
                onChange={handleChange}
              />
              <small id="emailHelp" className="form-text">
                Enter valid email address.
              </small>
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                className={`form-control ${validity.phone === null ? '' : validity.phone ? 'valid' : 'invalid'}`}
                id="phone"
                placeholder="Enter your phone number"
                value={formState.phone}
                onChange={handleChange}
              />
              <small id="phoneHelp" className="form-text">
                Phone number must be in format 222-222-2222.
              </small>
            </div>

            <button
              type="submit"
              className="submit-button"
              disabled={!isFormValid}>
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export { Register };
