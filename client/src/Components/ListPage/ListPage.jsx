import React, { useContext, useState, useEffect } from 'react';
import './ListPage.css';
import FormContext from '../../Context/FormContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ListPage = ({ colleges }) => {
  const { mainsForm, setMainsForm } = useContext(FormContext);
  const [collegeName, setCollegeName] = useState('');
  const [sortType, setSortType] = useState('');
  const [sortBranch, setSortBranch] = useState('');
  const [hoveredBranch, setHoveredBranch] = useState(null);
  const [hoveredElement, setHoveredElement] = useState(null);

  const [response, setResponse] = useState([]);

    // Fetch filtered data whenever filters change
    useEffect(() => {
      const fetchFilteredData = async () => {
        try {
         // console.log(mainsForm)
          const recv = await axios.post('http://localhost:4000/predictColleges', mainsForm);
         // console.log('predict Data:', recv.data);
          setResponse(recv.data); // Update state with filtered data
        } catch (error) {
          console.error('Error in predicting colleges:', error);
        }
      };
  
      fetchFilteredData();
    }, []); 

  const navigate = useNavigate();

  const handleSortTypeChange = (e) => {
    setSortType(e.target.value);
  };

  const handleSortBranchChange = (e) => {
    setSortBranch(e.target.value);
  };

  const handleBranchHover = (branches, element) => {
    setHoveredBranch(branches);
    setHoveredElement(element);
  };

  const handleBranchLeave = () => {
    setHoveredBranch(null);
    setHoveredElement(null);
  };

  const handleClick = (name) => {
    setCollegeName(name);
  };

  useEffect(() => {
    if (collegeName) {
      const newFormData = {
        ...mainsForm,
        collegeName: collegeName,
      };
      setMainsForm(newFormData);
      navigate(`/jeemains/jossa`);
    }
  }, [collegeName, mainsForm, navigate, setMainsForm]);

  const filteredColleges = colleges.filter(
    (college) =>
      (sortType ? college.type === sortType : true) &&
      (sortBranch ? college.branch.includes(sortBranch) : true)
  );

  return (
    <div className="college-list-container">
      <div className="filters">
        <select onChange={handleSortTypeChange} value={sortType}>
          <option value="">All Types</option>
          <option value="Government">Government</option>
          <option value="Private">Private</option>
        </select>

        <select onChange={handleSortBranchChange} value={sortBranch}>
          <option value="">All Branches</option>
          <option value="Engineering">Engineering</option>
          <option value="Medical">Medical</option>
          <option value="Commerce">Commerce</option>
          {/* Add more branches as needed */}
        </select>

        <button className="apply-filter-button" onClick={() => {}}>Apply Filter</button>
      </div>

      <ul className="college-list">
        {response.map((college, index) => (
          <li key={index} className="college-item">
            <img
              src={college.image_url}
              alt={`${college.college_name} image`}
              className="college-image"
              onClick={() => handleClick(college.name)}
            />
            <div
              className="college-details"
              onClick={() => handleClick(college.name)}
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
