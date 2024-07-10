import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './BodySection.css';

function BodySection() {
    const [navigateTo, setNavigateTo] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (navigateTo) {
            navigate(navigateTo);
        }
    }, [navigateTo, navigate]);

    const handleAddCollegeClick = () => {
        setNavigateTo('/');
    };

    const handleShowCollegesClick = () => {
        setNavigateTo('/show-colleges');
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
