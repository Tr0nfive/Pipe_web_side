
import viteLogo from '/vite.svg'
import './App.css'

import { Link, Route, Routes } from 'react-router-dom'

import Login from './FuncComp/Login'
import Sign_up from './FuncComp/Sign_up'
import Store from './FuncComp/Store'
import Nav from './Nav'
import Cart from './FuncComp/Cart'
import Lib from './FuncComp/UserLib'

function App(props) {


  return (
    <>

          <Nav/>
          {/* <img src={viteLogo} className="logo" alt="Vite logo" /> */}
          

            
      <Routes>
        <Route path='/'element={<Login/>}/>
        <Route path='/signUp'element={<Sign_up/>}/>
        <Route path='/store' element={<Store/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='libary' element={<Lib/>}/>
      </Routes>
      
      
      
    </>
  )
}

export default App

