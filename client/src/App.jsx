import React from 'react'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import { Routes , BrowserRouter,Route } from 'react-router-dom'
import Home from './Pages/Home'

function App() {
  return (
   
    
    
    <>
  <BrowserRouter>
  
  <Routes>
  <Route path='/' element = {<Home/>}/>
    
    <Route path='/login' element = {<Login/>}/>
    <Route path='/signup' element = {<Signup/>}/>

  </Routes>
  
  
  </BrowserRouter>
    
    </>
  )
}

export default App