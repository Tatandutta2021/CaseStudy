// import React from 'react'
// import "./City.css"

// function City(){
//   return (
//     <div>
        
//       <form class="frm1">
//         <br/>
//         <br/>
//         <br/>
//       <div><label htmlFor="id">ID : </label>   
//             <input type="number" placeholder=" location id" ></input><br/>
//         </div>
//         <br/>
//         <div> <label htmlFor="destination">City Name : </label>
//             <input type="text" placeholder="City Name" ></input><br/>
//         </div><br/>

//         <div><label htmlFor="recommended_place">Recommanded Places : </label> 
//             <input type="text" placeholder="Attractive destinations" ></input><br/>
//         </div><br/>
//         <div><label htmlFor="total_Cost">Cost to travel the City  : </label>   
//             <input type="number" placeholder=" Total Cost" ></input><br/>
//         </div><br/>
        
//         <br/>
//         <button className="btn btn-lg btn-info" type="submit">Insert Data</button>
//       </form>
    
//     </div>
//   )
// }

// export default City





import React, { useRef } from "react"
import './City.css'

function AddCity() {
 
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
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzZHV0dGEzNiIsImV4c…Q8jt-64Tg7J1oc8Z1j_AmErlIMXhQc28cXam_Bpi_j5LIb7jA'
        
      }, 
     body: JSON.stringify(user)
  };
    const fetchApi=async()=>{
      try{
      let response = await fetch(`http://localhost:8082/api/v1/update`,requestOptions)
      let data = await response.json();
            console.log(data)
      }catch(err){
           console.log(err)
      }
    }
    fetchApi()
   } 

    return (
      
      <div className="addcity" data-testid="city"><center>
        <br/>
          <h2>Update  DATA  Here</h2><br/>

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
  
  export default AddCity;
