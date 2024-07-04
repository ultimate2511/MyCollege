import React, { useState } from 'react';
import './JeeMainsForm.css'
import { useNavigate } from 'react-router-dom';

const JEEMainForm = () => {
  const [formData, setFormData] = useState({
    counselling: 'Joint Seat Allocation Authority (JoSAA Counselling)',
    rank: '',
    homeState: '',
    casteGroup: '',
    gender: '',
    speciallyAbled: '',
    mobileNumber: ''
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

  const handleBack= (event) => {
    
      navigate(`/`);
    
  };
  


  const handleSubmit = (e) => {
    e.preventDefault();
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
        <select name="counselling" value={formData.counselling} onChange={handleChange}>
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
        <select name="casteGroup" value={formData.casteGroup} onChange={handleChange}>
          <option value="">-- Select --</option>
          {/* Add options for caste groups here */}
          <option value="General">General</option>
          <option value="Ews">Ews</option>
          <option value="OBC">OBC (Ncl)</option>
          <option value="SC">SC</option>
          <option value="ST">ST</option>
        </select>
      </div>

      <div>
        <label>Enter Your {formData.casteGroup} Category Rank {(formData.casteGroup==="General")?"(CRL)":""}</label>
        <input
          type="text"
          name="rank"
          value={formData.rank}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Select your Home State</label>
        <select name="homeState" value={formData.homeState} onChange={handleChange}>
          <option value="">-- Select --</option>
          {
              statesAndUnionTerritories.map((item)=>{
                    
                <option value="hi">hi</option>
               
              })
          }
          
        </select>
      </div>
  
      <div>
        <label>Gender</label>
        <select name="casteGroup" value={formData.casteGroup} onChange={handleChange}>
          <option value="">-- Select --</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          {/* Add options for caste groups here */}
        </select>
      </div>
      <div>
        <label>Are You Physically Challenged?</label>
        <select name="casteGroup" value={formData.casteGroup} onChange={handleChange}>
          <option value="">-- Select --</option>
          <option value="Male">Yes</option>
          <option value="Female">No</option>
          {/* Add options for caste groups here */}
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
