import React, {useState} from "react";
import './BodySection.css'
import criteria from './criteria.png'
function BodySection() {
    const [style, setStyle] = useState({display: 'none'});
    
    const d = new Date();
  return (

    <div className="container">
    <div className="cri">
    <div className="alpha" >
    <img src={criteria} style={{width:"40px"}}
      onMouseEnter={e => {
                    setStyle({display: 'flex',marginBottom:"-67.5px"});
                }}
                onMouseLeave={e => {
                    setStyle({display: 'none'})
            }}
    />
    <span onMouseEnter={e => {
                    setStyle({display: 'flex',marginBottom:"-67.5px"});
                }}
                onMouseLeave={e => {
                    setStyle({display: 'none'})
              }}>
    <h4 style={{marginLeft:"1px",marginTop:"5px"}} > Our Criteria</h4></span>
    </div>
    <div className="info" style={style}>
      we are predicting college <br/> on the basis of previous three <br/> year jossa counselling round
    </div> 
    <div className="flex">
      <h4 className="positioning">College Predictor {d.getFullYear()}</h4>
      <h4 className="below">Predict Colleges based on exams you have taken.</h4>
    </div>
    </div>
    
    </div>
  )
}

export default BodySection