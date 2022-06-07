// import React, {useState} from "react"
// import "./Login.css"

// function Login(){
//     const [username, setUsername]= useState("");
//     const [password, setPassword]= useState("");
//     return(
//         <div class="divsd">
        
           
            
//             <div class="divlogin"><h2>Login</h2>

//                 <form >
                
//                     <div>
//                         <label htmlFor="username"></label>
//                         <input type="text" name="username" id="username" autoComplete="off" placeholder="username" value={username} 
//                         onChange={(e) => setUsername(e.target.value)}/>
                        
//                     </div>
//                     <br/>
//                     <div>
//                         <label htmlFor="password"></label>
//                         <input type="password" name="password" id="password" autoComplete="off" placeholder="password" value={password} 
//                         onChange={(e) => setPassword(e.target.value)}/>
//                     </div>
//                     <br/>
//                     <center><button className="btn btn-lg btn-info" type="submit">Login</button></center>
//                     </form>   
         
//             </div>
      
//         <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
//         <br/><br/><br/><br/>
//         <br/><br/><br/><br/>
//         <br/><br/>
      
   
       
   
//         </div>
          
//     )
// }

// export default Login;










import React, { useRef } from "react"
import './Login.css'

function Login() {
 
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
      let response = await fetch(`http://localhost:8081/api/jwt/auth`,requestOptions)
      let data = await response.json();
            console.log(data)
      }catch(err){
           console.log(err)
      alert("Invalid Credentials")
          }
    }
    fetchApi()
   } 

    return (
      
      <div className="loginForm"  >
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
</form> <br/><br/><br/><br/><br/><br/>
</center>
       </div>
      
    );
  }
  
  export default Login;
