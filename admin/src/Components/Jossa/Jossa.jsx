import React, {useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MyImage from './DeleteRed.webp';
import axios from 'axios';
import './Jossa.css';
import SearchContext from '../../Context/SearchContext.js';
const Jossa = () => {
  const {search,setSearch} = useContext(SearchContext);
  
  const navigate = useNavigate();
  
  const [filters, setFilters] = useState({
    category: 'all',
    state: 'all',
    branch: 'all',
    gender: 'all',
    collegeName:  search || 'NIT Silchar', // Set default value
  });

  const [filteredData, setFilteredData] = useState([]);

  useEffect(()=>{

    const newFilter = {...filters,collegeName:search};
    setFilters(newFilter);
  },[search])

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
  }, [filters]);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div className="app">
      <Sidebar filters={filters} handleFilterChange={handleFilterChange} />
      <Table data={filteredData} setData={setFilteredData} />
    </div>
  );
};

const Sidebar = ({ filters, handleFilterChange }) => {
  const collegeOptions = [
    'NIT Agartala',
    'NIT Arunachal Pradesh',
    'NIT Andhra Pradesh',
    'MANIT Bhopal',
    'NIT Calicut',
    'NIT Delhi',
    'NIT Durgapur',
    'NIT Goa',
    'NIT Hamirpur',
    'NIT Jamshedpur',
    'NIT Kurukshetra',
    'NIT Manipur',
    'NIT Meghalaya',
    'NIT Mizoram',
    'NIT Nagaland',
    'NIT Patna',
    'NIT Puducherry',
    'NIT Raipur',
    'NIT Rourkela',
    'NIT Sikkim',
    'NIT Silchar',
    'NIT Srinagar',
    'SVNIT Surat',
    'NIT Tiruchirappalli',
    'NIT Uttarakhand',
    'NIT Warangal',
    'NIT Jalandhar',
    'MNIT Jaipur',
    'MNNIT Allahabad',
    'VNIT Nagpur',
    'NIT Andhra Pradesh',
  ];

  return (
    <div className="sidebar">
      <h3>Filters</h3>
      <div className="filter-group">
        <label htmlFor="collegeName">Select College:</label>
        <select id="collegeName" name="collegeName" value={filters.collegeName} onChange={handleFilterChange}>
          {collegeOptions.map((college, index) => (
            <option key={index} value={college}>
              {college}
            </option>
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

const Table = ({ data, setData }) => {
  const navigate = useNavigate();
  const getYear = new Date().getFullYear();
  const imageLink = 'https://th.bing.com/th/id/OIP.uhuImhPyEPbzcuU4mUCUVgHaHa?rs=1&pid=ImgDetMain';

  const [hoveredDelete, setHoveredDelete] = useState(null);
  const [hoveredEdit, setHoveredEdit] = useState(null);

  const handleDelete = async (item) => {
    console.log('Item to delete:', item._id);
    // Perform delete action here
    try {
      const res = await fetch(`https://mycollege-backend.onrender.com/${item._id}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        setData((prev) => prev.filter((post) => post._id !== item._id));
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleUpdate = (item) => {
    console.log('Item to update:', item._id);
    const id = item._id;
    navigate(`/update/${id}`);
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
            <th>Update</th>
            <th>Remove</th>
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
                <img
                  src={imageLink}
                  style={{
                    width: '16px',
                    cursor: 'pointer',
                    opacity: hoveredEdit === index ? 0.7 : 1,
                  }}
                  alt="update"
                  onClick={() => handleUpdate(item)}
                  onMouseEnter={() => setHoveredEdit(index)}
                  onMouseLeave={() => setHoveredEdit(null)}
                />
              </td>
              <td>
                <img
                  src={MyImage}
                  style={{
                    width: '16px',
                    cursor: 'pointer',
                    opacity: hoveredDelete === index ? 0.7 : 1,
                  }}
                  alt="delete"
                  onClick={() => handleDelete(item)}
                  onMouseEnter={() => setHoveredDelete(index)}
                  onMouseLeave={() => setHoveredDelete(null)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Jossa;
