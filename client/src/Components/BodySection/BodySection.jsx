import React, { useState, useEffect } from "react";
import './BodySection.css';
import criteria from './criteria.png';

function BodySection() {
    const [style, setStyle] = useState({ display: 'none' });
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    
    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
    };
    
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleInfo = () => {
        setStyle(prevStyle => ({
            display: prevStyle.display === 'none' ? 'block' : 'none'
        }));
    };

    const d = new Date();
    return (
        <div className="container">
            <div className="cri">
                <div className="alpha">
                    <img 
                        src={criteria} 
                        style={{ width: "40px" }}
                        onMouseEnter={e => !isMobile && setStyle({ display: 'block' })}
                        onMouseLeave={e => !isMobile && setStyle({ display: 'none' })}
                        onClick={isMobile ? toggleInfo : undefined}
                    />
                    <span
                        onMouseEnter={e => !isMobile && setStyle({ display: 'block' })}
                        onMouseLeave={e => !isMobile && setStyle({ display: 'none' })}
                        onClick={isMobile ? toggleInfo : undefined}
                    >
                        <h4 style={{ marginLeft: "1px", marginTop: "5px" }}>Our Criteria</h4>
                    </span>
                </div>
                <div className={`info ${isMobile ? 'mobile' : ''}`} style={style}>
                    We are predicting college <br /> on the basis of previous three <br /> year jossa counselling round
                </div>
                <div className="flex">
                    <h4 className="positioning">College Predictor {d.getFullYear()}</h4>
                    <h4 className="below">Predict Colleges based on exams you have taken.</h4>
                </div>
            </div>
        </div>
    );
}

export default BodySection;
