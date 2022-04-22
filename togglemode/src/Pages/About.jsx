import React, { useContext } from 'react'
import { Toggle } from "../context/Toggle";
import "./About.css"
const About = () => {

  const {  toggle} =useContext(Toggle)
  return (
    <div className={toggle ? "dark" :"white"} >
    Welcome to Dark Mode
      <h1> Hii </h1>
    </div>
  )
}

export default About