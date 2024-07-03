import React from 'react'
import './BodySection1.css';
import engineer from './engineer.jpg';
import medical from './medical.jpg';
import mba from './mba.jpg';
function BodySection1() {
    
  return (
    <div>
    <div className="">
      
    </div>
    <div className="small">
        <h3>Select Course</h3>
      <div className="Box">
      <div class="card">
      <img src = {engineer} style={{ width: "125px", height:"100px" }}/>
        <div class="container1">
        <h4><b>JEE Main</b></h4>
        </div>
      </div>
      <div class="card">
      <img src = {engineer} style={{ width: "125px", height:"100px" }}/>
        <div class="container1">
        <h4><b>JEE Advanced</b></h4>
        </div>
      </div>
      <div class="card">
      <img src = {medical} style={{ width: "125px", height:"100px" }}/>
        <div class="container1">
        <h4><b>Neet</b></h4>
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