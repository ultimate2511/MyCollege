import React from "react";
import { useNavigate } from "react-router-dom";
import './BodySection.css';

function BodySection() {
    const navigate = useNavigate();

    const handleAddCollegeClick = () => {
        navigate('/');
    };

    const handleShowCollegesClick = () => {
        navigate('/show-colleges');
    };

    return (
        <div className="container">
            <button className="square-button" onClick={handleAddCollegeClick}>
                <i className="fas fa-plus"></i>
                <span>Add College</span>
            </button>
            <button className="square-button" onClick={handleShowCollegesClick}>
                <i className="fas fa-university"></i>
                <span>Show Colleges</span>
            </button>
        </div>
    );
}

export default BodySection;
