import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./master.scss"
import Police from './component/Police/Police'
import AdminMedia from './component/AdminMedia/AdminMedia'
import AdminServices from './component/AdminServices/AdminServices'
const Content = lazy(()=> import('./component/Content/Content'))
const Loader = lazy(()=> import('./component/Loader/Loader'))
const Home = lazy(()=> import('./component/Home/Home'))
const AdminPage = lazy(()=> import('./component/AdminPage/AdminPage'))

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Suspense fallback={<Loader/>}><Home/></Suspense>}>
      <Route index element={<Content/>}/>
      <Route path='/police' element={<Police/>}/>
    </Route>
    <Route path="/admin" element={<Suspense fallback="loader"><AdminPage/></Suspense>}>
      <Route index element={"головна"}/>
      <Route path='media' element={<AdminMedia/>}/>
      <Route path='services-price' element={<AdminServices/>}/>

      <Route path='*' element={"404"}/>
    </Route>
  </Routes>
   
  </BrowserRouter>
    
  
)
