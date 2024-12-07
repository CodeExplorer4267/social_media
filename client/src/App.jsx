import React from 'react'
import Loading from './components/common/Loading'
import { Routes,Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Search from './pages/Search/Search'
import Notification from './pages/Notification/Notification'
import Profile from './pages/Profile/Profile'
import Error from './components/common/Error'
const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/notification' element={<Notification/>}/>
        <Route path='/user' element={<Profile/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </div>
  )
}

export default App
