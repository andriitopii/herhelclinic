import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
// import Home from './component/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Content from './component/Content/Content'
import "./master.scss"
import AdminPage from './component/AdminPage/AdminPage'
import Police from './component/Police/Police'
// import Loader from './component/Loader/Loader'
const Content = lazy(()=> import('./component/Content/Content'))
const Loader = lazy(()=> import('./component/Loader/Loader'))
const Home = lazy(()=> import('./component/Home/Home'))

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Suspense fallback={<Loader/>}><Home/></Suspense>}>
      <Route index element={<Content/>}/>
      <Route path='/police' element={<Police/>}/>
    </Route>
    <Route path="/admin" element={<AdminPage/>}>
      <Route index element={<Content/>}/>
    </Route>
  </Routes>
   
  </BrowserRouter>
    
  
)
