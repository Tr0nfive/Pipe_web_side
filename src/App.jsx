
import viteLogo from '/vite.svg'
import './App.css'

import { Link, Route, Routes } from 'react-router-dom'

import Login from './FuncComp/Login'
import Sign_up from './FuncComp/Sign_up'

function App() {


  return (
    <>

          <img src={viteLogo} className="logo" alt="Vite logo" />
          <Link to={"/"}>Login</Link>
          <Link to={"/signUp"}>signUp</Link>

      <Routes>
        <Route path='/'element={<Login/>}/>
        <Route path='/signUp'element={<Sign_up/>}/>
      </Routes>
      
      
      
    </>
  )
}

export default App
