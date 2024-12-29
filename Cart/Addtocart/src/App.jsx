import React from 'react'
import Layout from './component/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<Layout/>}>
      <Route path={"home"} element={<Home/>}/>
      <Route path={"cart"} element={<Cart/>}/>

      
      
      </Route>


    </Routes>

    
    </BrowserRouter>
    
    
    
    
    
    </>
  
  )
}

export default App;