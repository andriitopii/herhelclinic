import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './component/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Content from './component/Content/Content'
import "./master.scss"
import AdminPage from './component/AdminPage/AdminPage'
import Police from './component/Police/Police'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}>
      <Route index element={<Content/>}/>
      <Route path='/police' element={<Police/>}/>
    </Route>
    <Route path="/admin" element={<AdminPage/>}>
      <Route index element={<Content/>}/>
    </Route>
  </Routes>
   
  </BrowserRouter>
    
  
)
