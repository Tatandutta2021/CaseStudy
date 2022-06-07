import React, { useRef } from "react"
import './deletecity.css'

function Deletecity() {
 
  const refid =useRef('');
  
  

  const handleSubmit = (e) => {
    e.preventDefault()
    const destid=refid.current.value
   // const token=localStorage.getItem('token')
   const user={
     id:destid
   }


    console.log(user)
    const requestOptions = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzZHV0dGEzNiIsImV4cCI6MTY1NDI2Nzc5NywiaWF0IjoxNjU0MjQ5Nzk3fQ.1cZ8rxWAk5fouMPkOmx8cZ2jazbHOc4SDeqtLkD5S5GeNdCBi8xIYG3QHgHwz2s9l-zxwHB-0pJnjqFi3tYD9g'
        
        
        

      }, 
     body: JSON.stringify(user)
  };
    const fetchApi=async()=>{
      try{
      let response = await fetch(`http://localhost:8082/api/v1/admin/${destid}`,requestOptions) //,,{Credential:'cityCode'}
      let data = await response.json();
            console.log(data)
      }catch(err){
           console.log(err)
      }
    }
    fetchApi()
   } 

    return (
      
      <div className="deleteid" data-testid="deletecity"><center>
          <br/>
          <h2>Delete Destination DATA</h2><br/>

<form onSubmit= {handleSubmit}  >
  <label htmlFor="destid">Location ID: &nbsp;&nbsp; </label>
  <input type="number" id="destid" name="destid" ref={refid}/>&nbsp;&nbsp;<br/><br/>

  <button className="btn btn-lg btn-info" type="submit" value="Submit">Delete</button>
   {/* <input type="submit" value="Submit"/> */}
</form> </center>
       </div>
      
    );
  }
  
  export default Deletecity;