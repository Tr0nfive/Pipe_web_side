import React, { useContext, useState,useEffect } from 'react'
import '../CSS/Login.css'
import { GlobalState } from '../Global'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  const { CheckUser ,CourrentUser ,setCurUser} = useContext(GlobalState)
  const [Email, setEmail] = useState()
  const [Pass, setPass] = useState()

  const GetEmail = (em) => {
    
    setEmail(em.target.value)
   // console.log('Email', Email)
  }
  const GetPass = (pas) => {
    
    setPass(pas.target.value)
   

  }
  const DoLogin = event => {
event.preventDefault ()
    let flag = CheckUser(Email, Pass)
    if (flag) {
      alert("alarm alarm")
      setCurUser({email:Email,pass:Pass})
      console.log('CourrentUser.email',CourrentUser )
      navigate("/store")
    }
    else alert("incorct email or password")
    console.log('flag', flag)
  }

  useEffect(() => {
    console.log('CourrentUser.email',CourrentUser )
    
  }, [CourrentUser])
  

  return (
    <div id='Login_div'>
      <h2>Login</h2><br />
      <form id='form_log' >
      
      <span id="Email_span">Email:</span> <input type="text" id="Email_log" placeholder='Email'
        onChange={GetEmail} />
      <br />
      <span id='Pass_span'>Password:</span> <input type="Password" placeholder='Password' id="Pass_log" onChange={GetPass} />
      <br />
      <button id='Log_Btn' onClick={DoLogin}>Login</button>
      </form>
    </div>
  )
}
