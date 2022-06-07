import { NavLink } from "react-router-dom";
import React from "react"
import './Navbar.css'


function Navbar(){
    return(
  
 <div class='center12'>
   
 <ul >
 
   <li><NavLink to="/">Home</NavLink></li>
   
  <li> <NavLink to="/Sites">Cities to Explore</NavLink></li>
  <li> <NavLink to="/Login">Login</NavLink></li>
  <li> <NavLink to="/Register">Register</NavLink></li>
  <li><NavLink to="/City">City</NavLink></li>
  <li> <NavLink to="/Contact">Contact</NavLink></li>
  <li><NavLink to="/About">About</NavLink></li>
  <li><NavLink to="/Getcity">Getcity</NavLink></li>
  <li><NavLink to="/Deletecity">Delete City</NavLink></li>
  <li><NavLink to="/Allcity">All City Data</NavLink></li>
</ul>







</div>

    )
}

export default Navbar;