import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
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
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.mobileNumber) formErrors.mobileNumber = 'Mobile number is required';
    if (!/^\d{10}$/.test(formData.mobileNumber)) formErrors.mobileNumber = 'Mobile number must be 10 digits';
    if (!formData.email) formErrors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) formErrors.email = 'Email address is invalid';
    if (!formData.password) formErrors.password = 'Password is required';
    if (formData.password.length < 6) formErrors.password = 'Password must be at least 6 characters long';
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      console.log('Form Data:', formData);
      // Handle form submission (e.g., send data to the backend)
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div>
    <form onSubmit={handleSubmit} className="sign-up-form">
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>
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
      
      <button className="button-63" type="submit">Sign Up</button>
      <div className='signin'>
            <span>Have an account?</span>
            <Link to='/signin' className='tag'>
              Sign In
            </Link>
          </div>
    </form>
    
    </div>
  );
};

export default SignUp;
