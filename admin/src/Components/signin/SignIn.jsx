import React, { useState,useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignIn.css';
import UserContext from '../../Context/UserContext';
const SignIn = () => {
  const { user, setUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    mobileNumber: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.mobileNumber) {
      formErrors.mobileNumber = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
      formErrors.mobileNumber = 'Mobile number must be 10 digits';
    }
    if (!formData.email) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email address is invalid';
    }
    if (!formData.password) {
      formErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      formErrors.password = 'Password must be at least 6 characters long';
    }
    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      console.log('Form Data:', formData);
      try {
        const res = await fetch('http://localhost:4000/signin', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        console.log(data);
        setUser(data);
        if (res.ok) {
          navigate('/');
        } else {
          setErrors({ apiError: data.message });
        }
      } catch (error) {
        setErrors({ apiError: 'Failed to sign in. Please try again later.' });
      }
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="sign-up-form">
        <div>
          <label>Mobile Number</label>
          <input
            type="text"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
          />
          {errors.mobileNumber && <p className="error">{errors.mobileNumber}</p>}
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        {errors.apiError && <p className="error">{errors.apiError}</p>}
        <button className="button-63" type="submit">Sign In</button>
        <div className='signin'>
          <span>Don't have an account?</span>
          <Link to='/signup' className='tag'>
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
