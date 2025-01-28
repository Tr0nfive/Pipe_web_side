
import React, { createContext, useState } from 'react'

import {v4 as uuid4, v4}from 'uuid'

export const GlobalState = createContext();

export default function GlobalPrivd(props) {
const [Users,setUsers] = useState([{id:1 ,name:"admin",email:"",pass:"123456"}]);
const [Cart,setCart] = useState([{userName:""}]);
const [CourrentUser ,setCurUser] = useState([{user:"",pass:""}])

const AddUser=(addEmail,addName,Addpass)=>{
let flag= true
Users.forEach(element => {
    if(element.email ==addEmail)
        flag= false
});
if(!flag)
    return flag
else {
    let newUser=[...Users , {id:v4(),name:addName,pass:Addpass,email:addEmail}]
    setUsers(newUser)
    return flag
    }
}

const AddToCart=({userNa,name,gamePic,price,id})=>{
    if(Cart.some(item=> item.gameId==id)){
        return false
    }
    else {
        let newCart = [...Cart,{userName:userNa,pic:gamePic,gameName:name,gamePrice:price,gameId:id}]
            setCart(newCart);
            return true
    }
}
const RemoveFromCart=(id)=>{
    let newCart = Cart.filter(game=> game.gameId !== id)
    setCart(newCart)
}

const CheckUser=(Email,Pass)=>{
    if(Users.some(user=>user.email==Email && user.pass==Pass)){
        let userName= Users.filter(user=>user.email==Email)
        setCurUser({name: userName.name ,pass:Pass})
        return true
    }
    else return false

}

  return (
    <GlobalState.Provider value = {{Cart,AddUser,AddToCart,RemoveFromCart,CheckUser,CourrentUser,Users}}>
        {props.children}
    </GlobalState.Provider>
  )
}
