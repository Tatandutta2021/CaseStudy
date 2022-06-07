import React, { useState } from "react"
 import './Allcity.css'

function GetallCity() {
   
   const [data, setData]=useState([])
    //const [token,setToken]=useState(initialToken)

  const handleSubmit = (e) => {
    e.preventDefault()
    
    
     

    const requestOptions = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzZHV0dGEzNiIsImV4cCI6MTY1NDI2Nzc5NywiaWF0IjoxNjU0MjQ5Nzk3fQ.1cZ8rxWAk5fouMPkOmx8cZ2jazbHOc4SDeqtLkD5S5GeNdCBi8xIYG3QHgHwz2s9l-zxwHB-0pJnjqFi3tYD9g'
        
    },
  };
    const fetchApi=async()=>{
      try{
      let response = await fetch(`http://localhost:8082/api/v1/getall`,requestOptions)
      let data = await response.json();
            console.log(data)
            setData(data)
      }catch(err){
           console.log(err)
           alert("Invalid data!! Login First")
      }
    }
    fetchApi()




   }

return (
      
    <div class="GetallCity">
        
      <center>
         <br></br><br></br>
        <h2> Location Data</h2>

<form onSubmit= {handleSubmit}  >

<input type="submit" class="button3" value="Get Data"/>
</form><br/><br/>

<table>

<tr>
  <th><center>id</center></th>
  <th><center>destination</center></th>
  <th><center>recommended_place</center></th>
  <th><center>total_Cost</center></th>
  
</tr>

{data.map(user => (

         

<tr>
<td>{user.id}</td>
<td>{user.destination}</td>

<td>{user.recommended_place}</td>

<td>{user.total_Cost}</td>


</tr>
))}

</table>
</center>
     </div>
    
  );
}
export default GetallCity;