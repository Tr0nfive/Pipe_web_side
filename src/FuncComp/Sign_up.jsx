import React, { useContext, useState } from 'react'
import { GlobalState } from '../Global'
import { useNavigate } from 'react-router-dom'

import '../CSS/Sign_up.css'

export default function Sign_up() {
	const navigate = useNavigate()

const {AddUser,Users} = useContext(GlobalState)

  const [email,setEmail] = useState()
  const [Nickname,setNick] = useState()
  const [pass,setPass] = useState()
  const [rePass, setRePass] = useState()



  const getEmail = (e) => {
    //console.log('email.target.value', e.target.value)
    setEmail(e.target.value)
  }

  const getNick = (e) => {
   // console.log('nick.target.value', e.target.value)
    setNick(e.target.value)
  } 
  const getPass = (e) => {
    //console.log('pass.target.value', e.target.value)
    setPass(e.target.value)
  }
  
  const getRePass = (e) => {
   // console.log('RePass.target.value', e.target.value)
    setRePass(e.target.value)
  }

  const signUp = event => {
    event.preventDefault()
    let flag =false
    if(pass === rePass){
      flag =AddUser(email,Nickname,pass)
    
    if(!flag){
      //console.log('users =',Users )
      alert("the email is already register")
    }
    else {
      //console.log('users =',Users )
      navigate("/")
      alert("thank you for registering to our app")
    }
    }
    else alert("the password dont match")
  }

  return (
    <div>
      <h2>Sign up</h2><br/>
      <form id="sign_up_form">
  <p id="required-note"><span className="red">*</span> Required fields</p>

  <label htmlFor="email" className="riq">Email:</label>
  <input type="text" name="email" onChange={getEmail} placeholder="Enter your email" required />

  <label htmlFor="nick" className="riq">Nickname:</label>
  <input type="text" name="nick" onChange={getNick} placeholder="Enter your nickname" required />

  <label htmlFor="pass" className="riq">Password:</label>
  <div className="password-container">
    <input type="password" name="pass" onChange={getPass} placeholder="Enter your password" required/>
    <div className="password-tooltip">
      <p>Password must contain:</p>
      <ul>
        <li> At least one  letter (a-z,A-Z)</li>
        <li> At least one digit (0-9)</li>
        <li> Minimum 8 characters in length</li>
      </ul>
    </div>
  </div>
  <label htmlFor="passR" className="riq">Confirm password:</label>
  <input type="password" name="passR" onChange={getRePass} placeholder="conform your password" required />

  <label htmlFor="gender">Gender:</label>
  <select name="gender">
    <option value=""></option>
    <option value="Male">Male</option>
    <option value="Female">Female</option>
    <option value="other">There is no other, just Male or Female</option>
    <option value="dont">I rather not say</option>
  </select>

  <label htmlFor="DOB">Date of Birth:</label>
  <input type="date" name="DOB" id="DOB" />

  <button id="sign_up_btn" onClick={signUp}>Sign up</button>
</form>

    </div>
  )
}
