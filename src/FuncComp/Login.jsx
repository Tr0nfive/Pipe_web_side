import React, { useContext, useState } from 'react'
import '../CSS/Login.css'
import  { GlobalState } from '../Global'

export default function Login() {
  const {CheckUser} =useContext(GlobalState)
  const [Email,setEmail] = useState()
  const [Pass,setPass] = useState()

  const GetEmail = (em) => {
    console.log('em.target.value', em.target.value)
    setEmail(em.target.value)
      console.log('Email', Email)
  }
  const GetPass = (pas) => {
    console.log('pas.target.value', pas.target.value)
    setPass(pas.target.value)
    console.log('Pass', Pass)
    
  }
  const DoLogin=()=>{

    let flag=CheckUser(Email,Pass)
    if(flag){
      alert("alarm alarm")
    }
    else alert ("incorct email or password")
    console.log('flag', flag)
  }
  return (
    <div>
        <h2>Login</h2><br/>
        <span id="Email_span">Email:</span> <input type="text" id="Email_log"
            onChange={GetEmail} />
        <br/>
        <span id='Pass_span'>Password:</span> <input type="Password" id="Pass_log" onChange={GetPass} />
        <br/>
        <button onClick={DoLogin}>Login</button>
    </div>
  )
}
