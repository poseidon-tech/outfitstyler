import React, {useEffect, useState} from "react"
import { LuUserSquare2 } from "react-icons/lu"
import { RiDoorLockBoxLine } from "react-icons/ri"
import {useNavigate, Link} from "react-router-dom"
import axios from "axios"
import './Register.css'


function Register() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register', {name,email,password})
        .then(result => {console.log(result)
        navigate('/login')
        })
        .catch(err=>console.log(err))
    }


  return (
    <body>
    <div className='wrapper'>
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div className="input-box">
          <input type="text" placeholder='Username' onChange={(e) => setName(e.target.value)} required />
          <RiDoorLockBoxLine className='icon' />
        </div>
        <div className="input-box">
          <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)}required />
          <LuUserSquare2 className='icon' />
        </div>
        <div className="input-box">
          <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}required />
          <RiDoorLockBoxLine className='icon' />
        </div>
    
        <button type="submit" >Register here!</button>
        </form>
        <div className="register-link">
          <p>Already have an account?  <a href="/Login">Login</a> </p>
         
          
        </div>
      
    </div>
    </body>
  )
}

export default Register;