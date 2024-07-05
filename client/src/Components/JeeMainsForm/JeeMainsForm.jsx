import React, { useState } from 'react';
import './JeeMainsForm.css';
import { useNavigate } from 'react-router-dom';

const JEEMainForm = () => {
  const [formData, setFormData] = useState({
    counselling: 'Joint Seat Allocation Authority (JoSAA Counselling)',
    course:'  B.E./B.Tech',
    casteGroup: '',
    rank: '',
    homeState: '',
    gender: '',
    speciallyAbled: ''
  });

  const statesAndUnionTerritories = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Lakshadweep", "Puducherry", "Ladakh", "Jammu and Kashmir"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(`/`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/jeemains/listpage`);
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Counselling</label>
        <select name="counselling" value={formData.counselling} onChange={handleChange}>
          <option value="Joint Seat Allocation Authority (JoSAA Counselling)">
            Joint Seat Allocation Authority (JoSAA Counselling)
          </option>
          <option value="CSAB Counselling">
            CSAB Counselling  (Not Available Now)
          </option>
          <option value="WBJEE Counselling">
            WBJEE Counselling  (Not Available Now)
          </option>
        </select>
      </div>
      <div>
        <label>Select Preferred Course For JEE Main</label>
        <select name="preferredCourse" value={formData.preferredCourse} onChange={handleChange}>
          <option value="B.Tech">
            B.E./B.Tech
          </option>
          <option value="B.Arch">
            B.Arch
          </option>
        </select>
      </div>
      <div>
        <label>Caste Group</label>
        <select name="casteGroup" value={formData.casteGroup} onChange={handleChange} required>
          <option value="">-- Select --</option>
          <option value="General">General</option>
          <option value="Ews">Ews</option>
          <option value="OBC">OBC (Ncl)</option>
          <option value="SC">SC</option>
          <option value="ST">ST</option>
        </select>
      </div>

      <div>
        <label>Enter Your {formData.casteGroup} Category Rank {(formData.casteGroup === "General") ? "(CRL)" : ""}</label>
        <input
          type="text"
          name="rank"
          value={formData.rank}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Select your Home State</label>
        <select name="homeState" value={formData.homeState} onChange={handleChange} required>
          <option value="">-- Select --</option>
          {
            statesAndUnionTerritories.map((item, index) => (
              <option key={index} value={item}>{item}</option>
            ))
          }
        </select>
      </div>

      <div>
        <label>Gender</label>
        <select name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">-- Select --</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div>
        <label>Are You Physically Challenged?</label>
        <select name="speciallyAbled" value={formData.speciallyAbled} onChange={handleChange} required>
          <option value="">-- Select --</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      <div className="button-container">
        <button type="button" onClick={handleBack}>Back</button>
        <button type="submit">Predict My Colleges</button>
      </div>
    </form>
  );
};

export default JEEMainForm;
