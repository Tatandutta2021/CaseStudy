// import React, {useState} from "react"
// import "./Register.css"

// function Register(){
//     const [username, setUsername]= useState("");
//     const [password, setPassword]= useState("");
//     return(
//         <div class="divsd">
        
//         <div>
//         <h1>Register</h1>
           
//             </div>
//         <div>
//                 <form action="">
//                     <div>
//                         <label htmlFor="username">Username </label>
//                         <input type="text" name="username" id="username" autoComplete="off" value={username} 
//                         onChange={(e) => setUsername(e.target.value)}/>
                        
//                     </div>
//                     <br/>
//                     <div>
//                         <label htmlFor="password">Password </label>
//                         <input type="password" name="password" id="password" autoComplete="off" value={password} 
//                         onChange={(e) => setPassword(e.target.value)}/>
//                         <br/>
//                     </div>
//                     <center><button type="submit">Register</button></center>
//                     </form>      
//             </div>
//         <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
//         <br/><br/>
      
   
       
   
//         </div>
          
//     )
// }

// export default Register;


// import React, {useState} from "react"
// import "./Register.css"

// function Register(){

//     const [username, setUsername]= useState("");
//     const [password, setPassword]= useState("");
//     function handleChange(event){

//         console.log(event.target);
//     }

   
//     return(
//         <div class="divsd">
        
           
            
//             <div class="divreg"><h2>Register here</h2>
//                 <form >
//                     <div className='form-group'>
//                     <input className="form-control"></input>
//                     </div>


//                     <div className='form-group'>
//                     <input className="form-control"></input>
//                     </div>

//                     <button className="btn btn-lg btn-info">Register</button>
//                 </form>   
         
//             </div>
            
      
//         <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
//         <br/><br/><br/><br/>
//         <br/><br/><br/><br/>
//         <br/><br/>
      
   
       
   
//         </div>
          
//     )
// }

// export default Register;





// import React,{useState} from 'react'

// export default function Register() {
//     const [name,setName]=useState("")
//     const [password,setPassword]=useState("")
  
  
//     async function signUp(){
      
//       let item={name,password}
//       //let item={userName:name,passWord:password}
//       console.warn(item)

//        let result= await fetch("http://localhost:8081/api/jwt/reg",{
//         //let result= await fetch("http://localhost:8081/api/jwt/get",{
//           method:'POST',
//          // method:'GET',
//           body:JSON.stringify(item),
//           header:{
//               "Content-Type":'application/json',
//               "Accept":'application/json'
//           }
//       })
//       result = await result.json()
//       console.warn("result",result)
//   } 
  
  
//   return (
//     <center>
//     <div className="divreg">
//         <h1>Register Page</h1>
//         <input type="text" value={name} onChange={(e)=> setName(e.target.value)} classNmae="form-control" placeholder="username"/><br/><br/>
//         <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)}classNmae="form-control" placeholder="password"/><br/><br/>
//         <button className="btn btn-primary" onClick={signUp}>Sign Up</button>
//     </div></center>
//   )
// }











import React, { useRef } from "react"
import './Register.css'

function Register() {
 
  const refUsername =useRef('');
  const refPassword =useRef('');
  

  const handleSubmit = (e) => {
    e.preventDefault()
    const username=refUsername.current.value
    const password=refPassword.current.value
   
   const user={
     userName:username,passWord:password
   }


    console.log(user)
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }, 
     body: JSON.stringify(user)
  };
    const fetchApi=async()=>{
      try{
      let response = await fetch(`http://localhost:8081/api/jwt/reg`,requestOptions)
      let data = await response.json();
            console.log(data)
      }catch(err){
           console.log(err)
           alert("Successfully Registered")
      }
    }
    fetchApi()
   } 

    return (
      
      <div className="registrationForm" >
        <center>
        <br/>
        <br/>
          <h2>Visit India's Finest Cities</h2>
          <br/>
          <h3>Connect with Us</h3>
          <br/>
        <br/>
<form onSubmit= {handleSubmit}  >
  <label htmlFor="username">Username: &nbsp;&nbsp; </label>
  <input type="text" id="username" name="username" ref={refUsername}/>&nbsp;&nbsp;
  <br/>
        <br/>
  <label htmlFor="password">Password: &nbsp;&nbsp; </label>
  <input type="password" id="password" name="password"ref={refPassword} />&nbsp;&nbsp;
  <br/>
        <br/>
   <input type="submit" value="Submit"/>
</form> 
</center>
       </div>
      
    );
  }
  
  export default Register;
