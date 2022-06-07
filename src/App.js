import './App.css'
import Header from "./components/Header"
import Footer from "./components/Footer"
import React from "react"
import Navbar from "./components/Navbar/Navbar"
import About from "./components/About"
import Contact from "./components/Contact"
import Sites from "./components/Sites"
import Home from "./components/Home"
import Register from './components/Register'
import City from './components/City'
import Getcity from './components/Getcity'
// import LoginForm from "./components/LoginForm"
import Login from "./components/Login"
import Deletecity from './components/Deletecity'
import Allcity from './components/Allcity'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"





function App() {
  return (
    <div class="div98" >
      
     
      <Router>
     
       <Navbar/>
      
      <br/><br/><br/>
      
        <Routes>
        
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/city" element={<City/>}/>
        <Route exact path="/sites" element={<Sites/>}/>
        <Route exact path="/getcity" element={<Getcity/>}/>
        <Route exact path="/Deletecity" element={<Deletecity/>}/>
        <Route exact path="/Allcity" element={<Allcity/>}/>
        </Routes>
       
      </Router>
     <Header/>
      
            
     

     <Footer/>
      <div>
      <lform/> 
      </div>
    </div>
    
   )
}


export default App;
