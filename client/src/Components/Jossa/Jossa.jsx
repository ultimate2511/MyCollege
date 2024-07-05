import React, { useState,useContext } from 'react';
import FormContext from '../../Context/FormContext';

import './Jossa.css';

const initialData = [
  { branch: 'Computer Science and Engineering', gender: 'Male', state: 'Home State', category: 'General', closingRank: [500, 450, 400] },
  { branch: 'Electrical Engineering', gender: 'Female', state: 'Other State', category: 'EWS', closingRank: [600, 550, 500] },
  { branch: 'Electronics and Communication Engineering', gender: 'Male', state: 'Home State', category: 'OBC', closingRank: [700, 650, 600] },
  { branch: 'Mechanical Engineering', gender: 'Female', state: 'Other State', category: 'SC', closingRank: [800, 750, 700] },
];

const Jossa = () => {
  const [filters, setFilters] = useState({
    category: 'all',
    state: 'all',
    branch: 'all',
    gender: 'all',
  });
  const {mainsForm,setMainsForm} = useContext(FormContext);


  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const filterData = (data) => {
    return data.filter((item) => {
      const categoryMatch = filters.category === 'all' || filters.category === item.category;
      const stateMatch = filters.state === 'all' || filters.state === item.state;
      const branchMatch = filters.branch === 'all' || filters.branch === item.branch;
      const genderMatch = filters.gender === 'all' || filters.gender === item.gender;
      return categoryMatch && stateMatch && branchMatch && genderMatch;
    });
  };

  const filteredData = filterData(initialData);

  return (
    <div className="app">
      <Sidebar filters={filters} handleFilterChange={handleFilterChange} />
      <Table data={filteredData} />
    </div>
  );
};

const Sidebar = ({ filters, handleFilterChange }) => {
  return (
    <div className="sidebar">
      <h3>Filters</h3>
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

const Table = ({ data }) => {
  const getYear = new Date().getFullYear();
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>Branch</th>
            <th>Gender</th>
            <th>State Quota</th>
            <th>Category</th>
            <th>{getYear - 1} Closing Rank</th>
            <th>{getYear - 2} Closing Rank</th>
            <th>{getYear - 3} Closing Rank</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.branch}</td>
              <td>{item.gender}</td>
              <td>{item.state}</td>
              <td>{item.category}</td>
              <td>{item.closingRank[0]}</td>
              <td>{item.closingRank[1]}</td>
              <td>{item.closingRank[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Jossa;
