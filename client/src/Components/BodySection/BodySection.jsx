import React from 'react'
import './BodySection.css'
import criteria from './criteria.png'
function BodySection() {
    const d = new Date();
  return (

    <div className="container">
    <div className="alpha">
    <img src={criteria} style={{width:"40px"}}/>
    <h4 style={{marginLeft:"1px",marginTop:"5px"}}> Our Criteria</h4>
    </div>
    <div className="flex">
      <h4 className="positioning">College Predictor {d.getFullYear()}</h4>
      <h4 className="below">Predict Colleges based on exams you have taken.</h4>
    </div>
    
    </div>
  )
}

export default BodySection