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
         console.log('predict Data:', recv.data);
         const res = recv.data;
        //  console.log(res[0]);
        //  console.log(res[0].college_type);
        const al =  res.filter((e)=>{
            return  sortType? sortType===e.college_type : true;
          })
          const final = al.filter((e)=>{
            const arr = e.college_branch;
            return sortBranch ? arr.includes(sortBranch) :true;
          })
          
          setResponse(final); 
          // Update state with filtered data
        } catch (error) {
          console.error('Error in predicting colleges:', error);
        }
      };
  
      fetchFilteredData();
    }, [sortType,sortBranch]); 

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
          <option value="Computer Science Engineering">Computer Science Engineering</option>
          <option value="Electronics and Communication Engineering">Electronics and Communication Engineering</option>
          <option value="Electrical Engineering">Electrical Engineering</option>
          <option value="Mechanical Engineering">Mechanical Engineering</option>
          <option value="Civil Engineering">Civil Engineering</option>
          
        </select>


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
