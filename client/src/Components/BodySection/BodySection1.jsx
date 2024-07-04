import React from 'react'
import './BodySection1.css';
import engineer from './engineer.jpg';
import medical from './medical.jpg';
import mba from './mba.jpg';
import Card from './Card.jsx';
function BodySection1() {
  return (
    <div>
    <div className="">
    </div>
    <div className="small">
        <h3>Select Course</h3>
      <div className="Box">
      <Card image = {engineer} exam = {"JEE Main"}/>
      <Card image = {engineer} exam = {"JEE Advance"}/>
      <Card image = {medical} exam = {"Neet"}/>
      <Card image = {mba} exam = {"CAT"}/>
      <Card image = {engineer} exam = {"JEE Main"}/>
      <Card image = {engineer} exam = {"JEE Main"}/>
      <Card image = {engineer} exam = {"JEE Main"}/>
      </div>
    </div>
    </div>
  )
}
// 
export default BodySection1