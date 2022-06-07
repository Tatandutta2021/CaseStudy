import React, { useRef } from "react"
import './Getcity.css'

function GetCity() {
 
  const refid =useRef('');
  const refdestination =useRef('');
  const refrecommended_place =useRef('');
  const reftotal_Cost =useRef('');
  
  

  const handleSubmit = (e) => {
    e.preventDefault()

    const sitecode=refid.current.value
    const citycode=refdestination.current.value
    const sitename=refrecommended_place.current.value
    const sitedesc=reftotal_Cost.current.value
   
   
   const user={
    id:sitecode,destination:citycode,recommended_place:sitename,total_Cost:sitedesc
   }


    console.log(user)
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzZHV0dGEzNiIsImV4c…Q8jt-64Tg7J1oc8Z1j_AmErlIMXhQc28cXam_Bpi_j5LIb7jA'
        
      }, 
     body: JSON.stringify(user)
  };
    const fetchApi=async()=>{
      try{
      let response = await fetch(`http://localhost:8082/api/v1/add`,requestOptions)
      let data = await response.json();
            console.log(data)
      }catch(err){
           console.log(err)
      }
    }
    fetchApi()
   } 

    return (
      
      <div className="getcity" data-testid="Getcitys"> 
        <center>
        <br/>
          <h2>Add DATA Here</h2><br/>

<form onSubmit= {handleSubmit}  >

<label htmlFor="sitecode">id: &nbsp;&nbsp; </label>
  <input type="number" id="sitecode" name="sitecode" ref={refid}/>&nbsp;&nbsp;<br/><br/>
  <label htmlFor="citycode">destination: &nbsp;&nbsp; </label>
  <input type="text" id="citycode" name="citycode" ref={refdestination}/>&nbsp;&nbsp;<br/><br/>
  <label htmlFor="sitename">recommended_place: &nbsp;&nbsp; </label>
  <input type="text" id="sitename" name="sitename" ref={refrecommended_place} />&nbsp;&nbsp;<br/><br/>
  <label htmlFor="sitedesc">total_Cost: &nbsp;&nbsp; </label>
  <input type="number" id="sitedesc" name="sitedesc" ref={reftotal_Cost} />&nbsp;&nbsp;<br/><br/>
  
   <input type="submit" value="Submit"/>
</form> </center>
       </div>
      
    );
  }
  
  export default GetCity;