import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './component/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}>

    </Route>
  </Routes>
   
  </BrowserRouter>
    
  
)
