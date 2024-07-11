import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import './Jossa.css';
import './editicon.jpg';
import MyImage from './DeleteRed.webp';
import UserContext from '../../Context/UserContext';

const Jossa = () => {
  const [filters, setFilters] = useState({
    category: 'all',
    state: 'all',
    branch: 'all',
    gender: 'all',
    collegeName: 'IIT Bombay', // Corrected: Use collegeName instead of college
  });
  const [filteredData, setFilteredData] = useState([]);

  // Array of college names
  const collegeOptions = [
    "NIT Agartala", "NIT Arunachal Pradesh", "NIT Andhra Pradesh", "MANIT Bhopal", "NIT Calicut", "NIT Delhi",
    "NIT Durgapur", "NIT Goa", "NIT Hamirpur", "NIT Jamshedpur", "NIT Kurukshetra", "NIT Manipur", "NIT Meghalaya",
    "NIT Mizoram", "NIT Nagaland", "NIT Patna", "NIT Puducherry", "NIT Raipur", "NIT Rourkela", "NIT Sikkim",
    "NIT Silchar", "NIT Srinagar", "SVNIT Surat", "NIT Tiruchirappalli", "NIT Uttarakhand", "NIT Warangal",
    "NIT Jalandhar", "MNIT Jaipur", "MNNIT Allahabad", "VNIT Nagpur", "NIT Andhra Pradesh"
  ];

  // Fetch filtered data whenever filters change
  useEffect(() => {
    const fetchFilteredData = async () => {
      try {
        const response = await axios.post('http://localhost:4000/filterdata', filters);
        console.log('Filtered Data:', response.data);
        setFilteredData(response.data); // Update state with filtered data
      } catch (error) {
        console.error('Error fetching filtered data:', error);
      }
    };

    fetchFilteredData();
  }, [filters]); // Run effect whenever filters change

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div className="app">
      <Sidebar filters={filters} handleFilterChange={handleFilterChange} collegeOptions={collegeOptions} />
      <Table data={filteredData} setData ={setFilteredData}/>
    </div>
  );
};

const Sidebar = ({ filters, handleFilterChange, collegeOptions }) => {
  return (
    <div className="sidebar">
      <h3>Filters</h3>
      <div className="filter-group">
        <label htmlFor="collegeName">Select College:</label> {/* Corrected: Use collegeName */}
        <select id="collegeName" name="collegeName" value={filters.collegeName} onChange={handleFilterChange}>
          {collegeOptions.map((college, index) => (
            <option key={index} value={college}>{college}</option>
          ))}
        </select>
      </div>
      <div className="filter-group">
        <label htmlFor="category">Select Category:</label>
        <select id="category" name="category" value={filters.category} onChange={handleFilterChange}>
          <option value="all">Open</option>
          <option value="General">General</option>
          <option value="EWS">EWS (Economically Weaker Section)</option>
          <option value="OBC">OBC (Other Backward Class)</option>
          <option value="SC">SC (Scheduled Caste)</option>
          <option value="ST">ST (Scheduled Tribe)</option>
        </select>
      </div>
      <div className="filter-group">
        <label htmlFor="state">Select State:</label>
        <select id="state" name="state" value={filters.state} onChange={handleFilterChange}>
          <option value="all">Both</option>
          <option value="Home State">Home State</option>
          <option value="Other State">Other State</option>
        </select>
      </div>
      <div className="filter-group">
        <label htmlFor="branch">Select Branch:</label>
        <select id="branch" name="branch" value={filters.branch} onChange={handleFilterChange}>
          <option value="all">All Branches</option>
          <option value="Computer Science and Engineering">Computer Science and Engineering</option>
          <option value="Electrical Engineering">Electrical Engineering</option>
          <option value="Electronics and Communication Engineering">Electronics and Communication Engineering</option>
          <option value="Mechanical Engineering">Mechanical Engineering</option>
          <option value="Civil Engineering">Civil Engineering</option>
          {/* Add more branches as needed */}
        </select>
      </div>
      <div className="filter-group">
        <label htmlFor="gender">Gender:</label>
        <select id="gender" name="gender" value={filters.gender} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
    </div>
  );
};

const Table = ({ data,setData }) => {
  const getYear = new Date().getFullYear();
  const imageLink  = "https://th.bing.com/th/id/OIP.uhuImhPyEPbzcuU4mUCUVgHaHa?rs=1&pid=ImgDetMain"

  const handleDelete = async(item) => {
    console.log('Item to delete:', item._id);
    // Perform delete action here
    try {
      const res = await fetch(
        `http://localhost:4000/deleteClosingRank/${item._id}`,
        {
          method: 'DELETE',
        }
      );
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        setData((prev) =>
          prev.filter((post) => post._id !== item._id)
        );
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>Branch</th>
            <th>Gender</th>
            <th>State Quota</th>
            <th>Category</th>
            <th>{getYear - 3} Closing Rank</th>
            <th>{getYear - 2} Closing Rank</th>
            <th>{getYear - 1} Closing Rank</th>
            <th>update</th>
            <th>remove</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="trow">
              <td>{item.branch_name}</td>
              <td>{item.gender_name}</td>
              <td>{item.state_name}</td>
              <td>{item.category_name}</td>
              <td>{item.year1_closing_rank}</td>
              <td>{item.year2_closing_rank}</td>
              <td>{item.year3_closing_rank}</td>
              <td>
                <img src={imageLink} style={{ width: '16px' }} alt="update" />
              </td>
              <td>
                <img src={MyImage} style={{ width: '16px' }} alt="delete" onClick={() => handleDelete(item)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Jossa;
