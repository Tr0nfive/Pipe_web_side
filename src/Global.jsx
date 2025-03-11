
import React, { createContext, useState,useEffect } from 'react'

import {v4 as uuid4, v4}from 'uuid'

export const GlobalState = createContext();

export default function GlobalPrivd(props) {
const [Users,setUsers] = useState([{id:1 ,name:"admin",email:"admin",pass:"123456"}]);
const [Cart,setCart] = useState([{email:"",game:{id:null}}]);
const [CourrentUser ,setCurUser] = useState({email:null,pass:null})
const [userLib,setUserLib] = useState([])
const [storeLib,setStoreLib] = useState([
    {id:1,name: "Assassins creed \nbrotherhood",price:15.00,pic:"A-C-brotherhood.jpg",widePic:"AC-Brotherhood-wide.jpeg"},
    {id:2,name: "God of War",price:55.00,pic:"GodOfWar.jpg",widePic:"GOW-2018-wide.jpg"},
    {id:3,name: "Minecarft" , price:22 ,pic: "minecarft.jpg",widePic:"minecraft-wide.jpg"},
    {id:4 ,name:"Crysis 3" , price:40 ,pic:"crysis_3.jpg",widePic:"crysis_3_wide.jpg"},
    {id:5 , name:"hello"},
    {},
    {},
    {},
    {},
    {}
    
])

const AddUser=(addEmail,addName,Addpass)=>{
let flag= true
Users.forEach(element => {
    if(element.email ==addEmail)
        flag= false
});
addEmail.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)?flag=true:flag=false
console.log('email_regex',addEmail,addEmail.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) 

Addpass.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/)?flag=true:flag=false
console.log('pass_regex', Addpass,Addpass.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/))
if(!flag)
    return flag
else {
    let newUser=[...Users , {id:v4(),name:addName,pass:Addpass,email:addEmail}]
    setUsers(newUser)
    return flag
    }
}

const AddToCart=(Email,game)=>{

    console.log("enter add cart");
    
    if(Cart.some(item=> item.id==game.id && item.email == Email)){
        console.log('game not add to cart ')
        return false
    }
    else {
        let newCart = [...Cart,{email:Email,id:game.id,name:game.name,price:game.price,pic:game.pic,widePic:game.widePic}]
        console.log('newCart', newCart)
            setCart(newCart);
            console.log('Cart', Cart)
            return true
    }
}
const RemoveFromCart=(id)=>{
    //console.log('id', id)
    let newCart = Cart.filter(game=> !(game.id === id &&game.email === CourrentUser.email))
    //console.log('newCart', newCart)
    setCart(newCart)
}

const CheckUser=(Email,Pass)=>{
    if(Users.some(user=>user.email==Email && user.pass==Pass))
        return true
    else return false
}
const addToUserLib = ()=>{
    let emailC = CourrentUser.email
    console.log("checkout game id is found",Cart.some(cart=> userLib.some(game=> game.email ==emailC && game.id == cart.id)))
        let check_game  = Cart.some(cart=>userLib.some(game=>game.email ==emailC && game.id == cart.id) )
    if (check_game)
        return false
    else{
        let new_games = Cart.filter(game=> game.email == CourrentUser.email)
        console.log('new_games', new_games)
        let new_lib = [...userLib,...new_games]
        let newCart = Cart.filter(game=> game.email !== CourrentUser.email)
        setCart(newCart)
        setUserLib(new_lib)
        alert("Thank you for your purchasing :\n" + new_games.map(game=> "\n"+game.name))
        return true
    }
}


const cartGameCount=()=>{
    let count = Cart.filter(game=> game.email == CourrentUser.email).length
    return count    
}

useEffect(() => {
   console.log('Cart', Cart)
  
  }, [Cart])
  
  useEffect(() => {
    
    console.log('userLib', userLib)
  
    
  }, [userLib])
  




  return (
    <GlobalState.Provider value = {{Cart,AddUser,AddToCart,RemoveFromCart,CheckUser,CourrentUser,storeLib,setCurUser,addToUserLib,userLib,cartGameCount}}>
        {props.children}
    </GlobalState.Provider>
  )
}
