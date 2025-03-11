

import React, { useContext, useEffect } from 'react'
import { GlobalState } from '../Global'

export default function Store(props) {
    const { storeLib, CourrentUser, AddToCart ,Cart,userLib} = useContext(GlobalState)

  
    const doseGameInCart=(game)=>{
        if (CourrentUser.email == null) {
            return  <button className='store-game-page' onClick={() => alert("you must login in order to buy a game")}>Add to cart </button>
            
        }

       else if (Cart.find(cartGame=>cartGame.id === game.id && CourrentUser.email === cartGame.email) ){
                return <button className='store-game-page' disabled="true">game is in cart</button>
        }
       else return <button className='store-game-page' onClick={() => { AddToCart(CourrentUser.email, game)} }>Add to cart </button>
         

    }

    //geting only the games that are own by the current user
    let owendGames = userLib.filter(game=> game.email === CourrentUser.email)

    //getting only the id of the games that are own by the current user
    owendGames = owendGames.map(game=>game.id)

    //getting the games that are not own by the current user
    let userStore = storeLib.filter(game => !owendGames.includes(game.id))


   // let userStore = storeLib.filter(game => userLib.filter(lib=>CourrentUser.email === lib.email && game.id !== lib.id))

    //console.log('userStore', userStore)

    let storeStr = userStore.map(game => {
        return <div className='store-game'key={game.id}>
            <img src={game.pic} className='store-game-img' alt="" />
            <br />
            <span className='store-game-name'>{game.name} </span>
            <br/>
            <span className='store-game-price'>{game.price}.00 $</span>
            <br />
            
            {
                CourrentUser.email == null ?
                    <button className='store-game-page' onClick={() => alert("you must login in order to buy a game")}>Add to cart </button>

                    :
                     <button className='store-game-page' onClick={() => { AddToCart(CourrentUser.email, game)} }>Add to cart </button>
            }
        </div>;
    })
    
    
   
    
    return (

        <div id='grid_store'>
            <h1 id='store_h1'>store</h1>
            {storeStr}


        </div>
    )
}
