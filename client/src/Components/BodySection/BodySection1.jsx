import React from 'react'
import './BodySection1.css';
import engineer from './engineer.jpg';
import medical from './medical.jpg';
import mba from './mba.jpg';
import { useNavigate } from 'react-router-dom';
import mains from './mains.webp'
import advanced from './advanced.jpg'
import neet from './neet.gif'
import cat from './cat.png'
import clat from './clat.png'
function BodySection1() {

   
  const navigate = useNavigate();

  const handleClick = (event) => {
    
      navigate(`/jeemains`);
    
  };
  
  return (
    <div>
    <div className="">
      
    </div>
    <div className="small">
        <h3>Select Course</h3>
      <div className="Box">
      <div class="card" onClick={handleClick}>
      <img src = {mains} style={{ width: "125px", height:"100px" }}/>
        <div class="container1">
        <h4><b>JEE Main</b></h4>
        </div>
      </div>
      <div class="card">
      <img src = {advanced} style={{ width: "125px", height:"100px" }}/>
        <div class="container1">
        <h4><b>JEE Advanced</b></h4>
        </div>
      </div>
      <div class="card">
      <img src = {neet} style={{ width: "125px", height:"100px" }}/>
        <div class="container1">
        <h4><b>Neet</b></h4>
        </div>
      </div>
      <div class="card">
      <img src = {cat} style={{ width: "125px", height:"100px" }}/>
        <div class="container1">
        <h4><b>CAT</b></h4>
        </div>
      </div>
      <div class="card">
      <img src = {clat} style={{ width: "125px", height:"100px" }}/>
        <div class="container1">
        <h4><b>CLAT</b></h4>
        </div>
      </div>
      <div class="card">
      <img src = {mba} style={{ width: "125px", height:"100px" }}/>
        <div class="container1">
        <h4><b>CAT</b></h4>
        </div>
      </div>
      <div class="card">
      <img src = {mba} style={{ width: "125px", height:"100px" }}/>
        <div class="container1">
        <h4><b>CAT</b></h4>
        </div>
      </div>
      </div>
      </div>
    </div>
  )
}
// 
export default BodySection1