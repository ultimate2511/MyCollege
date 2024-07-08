import React from "react";
import './BodySection.css';

function BodySection() {
    return (
        <div className="container">
            <div className="option" onClick={() => console.log('Add College Clicked')}>
                <span className="icon">➕</span>
                <span className="text">Add College</span>
            </div>
            <div className="option" onClick={() => console.log('Show College Clicked')}>
                <span className="icon">📚</span>
                <span className="text">Show College</span>
            </div>
        </div>
    );
}

export default BodySection;
