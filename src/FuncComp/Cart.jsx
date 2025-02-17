
import React,{ useContext, useEffect,useState } from 'react'
import { GlobalState } from '../Global'

export default function Cart() {
    const {Cart,CourrentUser,RemoveFromCart , addToUserLib} = useContext(GlobalState)

    const [totalPrice, setTotalPrice] = useState(0)

let userCart = Cart.filter(game=> game.email === CourrentUser.email)




let displayCart = userCart.map(game=>{
    return <div key={game.id}>
        
        <h4 className='cart_game_name'>{game.name}</h4>
        <br/>
        <span className='cart_game_pic'><img src={game.pic} alt="" className='cart_game_img' /></span>
        <div className='cart_game_genere'>

        </div>
        <div className='game_cart_info'>

        </div>
        <div className='cart_game_price'>
            {game.price}.00$
        </div>
        <button onClick={()=>RemoveFromCart(game.id)} className='cart_delete' >x</button>
    </div>
}
)
useEffect(() => {
  //reduce ==reduce() is a JavaScript array method used to process an array and return a single value.
  {/* array.reduce((accumulator, currentValue) => {
    // operation
         return newAccumulator;
        }, initialValue);*/}
    const total =userCart.reduce((sum,game) => sum + game.price ,0)
    setTotalPrice(total)
  
    
    console.log('userCart', userCart)
  
}, [userCart])



  return (
    <div>
        {displayCart}
            <div>
                <h2>CheckOut</h2>
                total price :{totalPrice}
                <button onClick={addToUserLib} >Checkout</button>
            </div>
    </div>
  )
}
