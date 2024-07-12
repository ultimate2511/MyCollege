import React, { useState,useContext } from 'react';
import axios from 'axios';
import {useNavigate,useLocation} from 'react-router-dom'

import './Update.css';
const Update = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const obj = location.state || {};
  const collegeTypeOptions = ['NIT', 'IIIT', 'GFTI'];
  const colleges = [
    "NIT Agartala",
    "NIT Arunachal Pradesh",
    "NIT Andhra Pradesh",
    "MANIT Bhopal",
    "NIT Calicut",
    "NIT Delhi",
    "NIT Durgapur",
    "NIT Goa",
    "NIT Hamirpur",
    "NIT Jamshedpur",
    "NIT Kurukshetra",
    "NIT Manipur",
    "NIT Meghalaya",
    "NIT Mizoram",
    "NIT Nagaland",
    "NIT Patna",
    "NIT Puducherry",
    "NIT Raipur",
    "NIT Rourkela",
    "NIT Sikkim",
    "NIT Silchar",
    "NIT Srinagar",
    "SVNIT Surat",
    "NIT Tiruchirappalli",
    "NIT Uttarakhand",
    "NIT Warangal",
    "NIT Jalandhar",
    "MNIT Jaipur",
    "MNNIT Allahabad",
    "VNIT Nagpur",
    "NIT Andhra Pradesh"
];


  const branchOptions = [
    'Computer Science and Engineering',
    'Electronics and Communication Engineering',
    'Electrical Engineering',
    'Mechanical Engineering',
    'Civil Engineering',
    // Add more branches as needed
  ];

  const genderOptions = ['Male', 'Female'];

  const categoryOptions = ['Open', 'General', 'EWS', 'OBC', 'SC', 'ST'];

  const stateOptions = ['Home State', 'Other State'];

  const allStatesAndUTs = [
    'Andaman and Nicobar Islands',
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chandigarh',
    'Chhattisgarh',
    'Dadra and Nagar Haveli',
    'Daman and Diu',
    'Delhi',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jammu and Kashmir',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Lakshadweep',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Puducherry',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal',
  ];

  const [formData, setFormData] = useState(obj);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        
        const res = await fetch(`http://localhost:4000/editClosingRank/${obj._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        if (!res.ok) {
        console.log(data.message);
        } else {
        console.log("successful")
        navigate('/show-colleges')
        }
      } catch (error) {
        console.log(error.message);
      }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="college_name">College Name:</label>
            <select
              id="college_name"
              name="college_name"
              value={formData.college_name}
              onChange={handleChange}
            >
              <option value="">Select College</option>
              {colleges.map((college, index) => (
                <option key={index} value={college}>
                  {college}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="college_type">College Type:</label>
            <select
              id="college_type"
              name="college_type"
              value={formData.college_type}
              onChange={handleChange}
            >
              {collegeTypeOptions.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="image_url">Image URL:</label>
          <input
            type="text"
            id="image_url"
            name="image_url"
            value={formData.image_url}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <div className="form-group full-width" style={{width:'100%'}}>
            <label htmlFor="branch_name">Branch Name:</label>
            <select
              id="branch_name"
              name="branch_name"
              value={formData.branch_name}
              onChange={handleChange}
            >
              <option value="">Select Branch</option>
              {branchOptions.map((branch, index) => (
                <option key={index} value={branch}>
                  {branch}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="gender_name">Gender:</label>
            <select
              id="gender_name"
              name="gender_name"
              value={formData.gender_name}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              {genderOptions.map((gender, index) => (
                <option key={index} value={gender}>
                  {gender}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="category_name">Category:</label>
            <select
              id="category_name"
              name="category_name"
              value={formData.category_name}
              onChange={handleChange}
            >
              <option value="">Select Category</option>
              {categoryOptions.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="location">Location:</label>
            <select
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
            >
              <option value="">Select Location</option>
              {allStatesAndUTs.map((state, index) => (
                <option key={index} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="state_name">State:</label>
            <select
              id="state_name"
              name="state_name"
              value={formData.state_name}
              onChange={handleChange}
            >
              <option value="">Select State</option>
              {stateOptions.map((state, index) => (
                <option key={index} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="year1">Year 1:</label>
            <input
              type="number"
              id="year1"
              name="year1"
              value={formData.year1}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="year1_closing_rank">Year 1 Closing Rank:</label>
            <input
              type="number"
              id="year1_closing_rank"
              name="year1_closing_rank"
              value={formData.year1_closing_rank}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="year2">Year 2:</label>
            <input
              type="number"
              id="year2"
              name="year2"
              value={formData.year2}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="year2_closing_rank">Year 2 Closing Rank:</label>
            <input
              type="number"
              id="year2_closing_rank"
              name="year2_closing_rank"
              value={formData.year2_closing_rank}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="year3">Year 3:</label>
            <input
              type="number"
              id="year3"
              name="year3"
              value={formData.year3}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="year3_closing_rank">Year 3 Closing Rank:</label>
            <input
              type="number"
              id="year3_closing_rank"
              name="year3_closing_rank"
              value={formData.year3_closing_rank}
              onChange={handleChange}
            />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Update;