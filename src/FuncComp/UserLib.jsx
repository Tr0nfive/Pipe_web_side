import React, { useContext,useState } from 'react'
import { GlobalState } from '../Global'

import '../CSS/UserLib.css'

export default function Lib() {
const {userLib,CourrentUser} = useContext(GlobalState)
const [curGame , setCurGame] = useState(null)

const getGame = (game) => {
  if(curGame === null||curGame.id !== game.id){
    setCurGame(game)
  }
  if(curGame !== null && curGame.id === game.id){
    setCurGame(null)
  }
}

  
 

let userLibary = userLib.filter(game=> game.email == CourrentUser.email)
    let libary = userLibary.map(game=>{
        return <div key={game.id} className='lib-game' style={{cursor:'pointer'} } onClick={()=>{getGame(game)}}>
            <span className='lib-side-name'>{game.name}</span>
            <img src={game.pic} alt="" className='lib-side-img' />
            
        </div>
        }
    )
  return (
    <>
        <h1>Libary</h1>
    <div className={curGame!= null ?'lib':'lib null'}>
      <div id={curGame != null ?"lib-side-div-select":"lib-side-div"}>
      <input type="search" name="" id="lib-search-game" />
      {libary}
      </div>
      {
        curGame !== null ? 
        <div id='lib-game-display'>
          
          <div id='lib-game-display-cover'>
            <span><img src={curGame?.widePic} alt="" id='lib-game-display-img' /></span>
            <h2 id='lib-game-display-name'>{curGame?.name}</h2>
            </div>
            <div id="lib-game-display-nav">
              <button id='lib-game-display-play'>Play</button>

            </div>

        </div>
        :
        <div>

        </div>
}
    </div>
    </>
  )
}
