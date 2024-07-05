import React, { useState } from 'react';
import './ListPage.css';

const ListPage = ({ colleges }) => {
  const [sortType, setSortType] = useState('');
  const [sortBranch, setSortBranch] = useState('');
  const [hoveredBranch, setHoveredBranch] = useState(null);
  const [hoveredElement, setHoveredElement] = useState(null);

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

  const filteredColleges = colleges
    .filter(college => 
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
        {filteredColleges.map((college, index) => (
          <li key={index} className="college-item">
            <img src={"https://lh3.googleusercontent.com/p/AF1QipNxkZdJK9pjFJgxuGYlPlqRfKzIhnSvTZ6azvV5=s1360-w1360-h1020"} alt={`${college.name} image`} className="college-image"/>
            <div className="college-details">
              <h4>{college.name}</h4>
              <p><span className='spp'>Type:</span> <span className='sp'>{college.type}</span></p>
              <p 
                className="branch-hover" 
                onMouseEnter={(e) => handleBranchHover(college.branch, e.target)}
                onMouseLeave={handleBranchLeave}
              >
               <span className='spp'> Checkout your Branch:</span>
              </p>
              <p><span className='spp'>Location:</span>  <span className='sp'>{college.location}</span></p>
              <p><span className='spp'>Probability:</span> <span className='sp'>100% </span></p>
            </div>
          </li>
        ))}
      </ul>

      {hoveredBranch && hoveredElement && (
        <div className="branch-details" style={{ top: hoveredElement.getBoundingClientRect().top + window.scrollY, left: hoveredElement.getBoundingClientRect().right + 10 }}>
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
