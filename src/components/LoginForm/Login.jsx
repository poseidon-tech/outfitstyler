import React, {useEffect, useState} from "react";
import './Login.css';
import { LuUserSquare2 } from "react-icons/lu";
import { RiDoorLockBoxLine } from "react-icons/ri";
import {useNavigate, Link} from "react-router-dom";
import axios from "axios";


function Login() {
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
      e.preventDefault()
      axios.post('http://localhost:3001/login', {email,password})
      .then(result => {console.log(result)
        if(result.data === "Success") {
        navigate('/home')
        } else if(result.data === "Password Incorrect"){
          alert("Password Incorrect")
        } else if(result.data === "No record Registered") {
          alert("No record Registered")
        }
      })
      .catch(err=>console.log(err))
  }
 return (
  <body>
    <div className='wrapper'>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="input-box">
          <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email' required />
          <LuUserSquare2 className='icon' />
        </div>
        <div className="input-box">
          <input type="password" placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}} required />
          <RiDoorLockBoxLine className='icon' />
        </div>
        {/* <div className="remember-forgot">
          <label><input type="checkbox" />Remember me</label>
          <a href="#">Forgot password?</a>
        </div> */}
        <button type="submit" >Login</button>
        </form>
        <div className="register-link">
          <p>Don't have an account? <a href="/register">Register</a></p>
        </div>
      
    </div>
    </body>
  );
};

export default Login;