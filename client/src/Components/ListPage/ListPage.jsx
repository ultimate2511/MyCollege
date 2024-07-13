import React, { useContext, useState, useEffect, useMemo } from 'react';
import './ListPage.css';
import FormContext from '../../Context/FormContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ListPage = () => {
  const { mainsForm, setMainsForm } = useContext(FormContext);
  const [collegeName, setCollegeName] = useState('');
  const [sortType, setSortType] = useState('');
  const [sortBranch, setSortBranch] = useState('');
  const [hoveredBranch, setHoveredBranch] = useState(null);
  const [hoveredElement, setHoveredElement] = useState(null);
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // console.log(mainsForm);
  const fetchFilteredData = async () => {
    setLoading(true);
    setError(null);
    try {
      const recv = await axios.post('http://localhost:4000/predictColleges', mainsForm);
      const res = recv.data;
      const filteredByType = sortType ? res.filter(e => sortType === e.college_type) : res;
      const final = filteredByType.filter(e => (sortBranch ? e.college_branch.includes(sortBranch) : true));
      setResponse(final);
    } catch (err) {
      setError('Error in predicting colleges');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFilteredData();
  }, [sortType, sortBranch]);

  const navigate = useNavigate();

  const handleSortTypeChange = (e) => setSortType(e.target.value);
  const handleSortBranchChange = (e) => setSortBranch(e.target.value);

  const handleBranchHover = (branches, element) => {
    setHoveredBranch(branches);
    setHoveredElement(element);
  };

  const handleBranchLeave = () => {
    setHoveredBranch(null);
    setHoveredElement(null);
  };

  const handleClick = (name) => {
    const newForm = {...mainsForm,
      college_name:name
    }
    setMainsForm(newForm);
    setCollegeName(name);
  }

  useEffect(() => {
    if (collegeName) {
      setMainsForm(prev => ({ ...prev, college_name:collegeName,collegeName:collegeName }));
      navigate('/jeemains/jossa');
    }
  }, [collegeName, setMainsForm]);

  const filteredColleges = useMemo(() => response, [response]);

  return (
    <div className="college-list-container">
      <div className="filters">
        <select onChange={handleSortTypeChange} value={sortType}>
          <option value="">All Types</option>
          <option value="NIT">NIT</option>
          <option value="IIT">IIT</option>
        </select>
        <select onChange={handleSortBranchChange} value={sortBranch}>
          <option value="">All Branches</option>
          <option value="Computer Science and Engineering">Computer Science Engineering</option>
          <option value="Electronics and Communication Engineering">Electronics and Communication Engineering</option>
          <option value="Electrical Engineering">Electrical Engineering</option>
          <option value="Mechanical Engineering">Mechanical Engineering</option>
          <option value="Civil Engineering">Civil Engineering</option>    
        </select>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <ul className="college-list">
        {filteredColleges.map((college, index) => (
          <li key={index} className="college-item">
            <img
              src={college.image_url}
              alt={`${college.college_name} image`}
              className="college-image"
              onClick={() => handleClick(college.college_name)}
            />
            <div
              className="college-details"
              onClick={() => handleClick(college.college_name)}
            >
              <h4>{college.college_name}</h4>
              <p>
                <span className="spp">Type:</span> <span className="sp">{college.college_type}</span>
              </p>
              <p
                className="branch-hover"
                onMouseEnter={(e) => handleBranchHover(college.college_branch, e.target)}
                onMouseLeave={handleBranchLeave}
              >
                <span className="spp"> Checkout your Branch:</span>
              </p>
              <p>
                <span className="spp">Location:</span> <span className="sp">{college.college_location}</span>
              </p>
              <p>
                <span className="spp">Probability:</span> <span className="sp">100% </span>
              </p>
            </div>
          </li>
        ))}
      </ul>

      {hoveredBranch && hoveredElement && (
        <div
          className="branch-details"
          style={{
            top: hoveredElement.getBoundingClientRect().top + window.scrollY,
            left: hoveredElement.getBoundingClientRect().right + 10,
          }}
        >
          <h4>Branches Available:</h4>
          <ul>
            {hoveredBranch.map((branch, index) => (
              <li key={index}>{branch}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ListPage;
