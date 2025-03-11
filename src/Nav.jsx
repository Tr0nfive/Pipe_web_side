
import React, { useContext } from 'react'

import { Link, Links, useLocation } from 'react-router-dom'

import { GlobalState } from './Global'
import "./CSS/Nav.css"

export default function Nav(props) {

const {CourrentUser,cartGameCount} = useContext(GlobalState)
  
const location = useLocation()
            
const showCartCount = () => {
    let count = cartGameCount()
   
    if(count > 0)
        
        return <span id='cart_count'>({count})</span>
    else
        return <span></span>
   }

    
    

  return (
    <div id='nav_grid'>
        <div id="nav">
            <Link to={"/"} className='navLink'>Login</Link>
            {
                CourrentUser.email == null ?
                    <>
                    
                   <Link to={"/signUp"} className='navLink'>sign up</Link>
                </>
                
               :
               <>
               {

               cartGameCount()>0?

                <Link to={"/cart"} className='navLink'>Cart {showCartCount()}</Link>
                :
                <span></span>
               }
               
                <Link to={"/libary"} className='navLink'>Libary</Link>
               </>
            }
            {
                location.pathname  ==="/store"?
                    <>
                    <input type="search" id='search_bar_store' placeholder='search game'/>
                    </>
                :
                <>
                <span></span>
                </>
            }
            <Link to={"/store"} className='navLink'>store</Link>
            </div>
             </div>
  )
}
