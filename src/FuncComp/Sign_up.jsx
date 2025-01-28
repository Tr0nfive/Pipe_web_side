import React, { useContext, useState } from 'react'
import { GlobalState } from '../Global'
import { useNavigate } from 'react-router-dom'

export default function Sign_up() {
const navigate = useNavigate()

const {AddUser,Users} = useContext(GlobalState)

  const [email,setEmail] = useState()
  const [Nickname,setNick] = useState()
  const [pass,setPass] = useState()
  const [rePass, setRePass] = useState()



  const getEmail = (e) => {
    console.log('email.target.value', e.target.value)
    setEmail(e.target.value)
  }

  const getNick = (e) => {
    console.log('nick.target.value', e.target.value)
    setNick(e.target.value)
  } 
  const getPass = (e) => {
    console.log('pass.target.value', e.target.value)
    setPass(e.target.value)
  }
  
  const getRePass = (e) => {
    console.log('RePass.target.value', e.target.value)
    setRePass(e.target.value)
  }

  const signUp = () => {
    let flag =false
    if(pass === rePass){
      flag =AddUser(email,Nickname,pass)
    
    if(!flag){
      console.log('users =',Users )
      alert("the email is already register")
    }
    else {
      console.log('users =',Users )
      navigate("/")
      alert("thank you for registering to our app")
    }
    }
    else alert("the password dont match")
  }

  return (
    <div>
      <h2>Sign up</h2><br/>
        Email:<input type="text" onChange={getEmail}  />
        <br/>
        Nickname:<input type="text" onChange={getNick} />
        <br/>
        Password:<input type="text"  onChange={getPass}/>
        <br/>
        Confirm  password  <input type="text" onChange={getRePass}/>
        <br/>
        <button id='sign_up_btn' onClick={signUp}>Sign up</button>
    </div>
  )
}
