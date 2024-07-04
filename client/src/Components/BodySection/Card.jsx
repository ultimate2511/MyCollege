import React from 'react'
import './Card.css'
import engineer from './engineer.jpg'
function Card({image,exam}) {
  return (
    <div>
        <div class="card">
      <img src = {image} style={{ width: "125px", height:"100px" }}/>
        <div class="container1">
        <h4><b>{exam}</b></h4>
        </div>
        </div>
    </div>
  )
}

export default Card