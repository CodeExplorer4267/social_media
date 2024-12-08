import React from 'react'
import Loading from './components/common/Loading'
import { Routes,Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Protected/Home'
import Search from './pages/Protected/Search'
import Notification from './pages/Notification/Notification'
import Profile from './pages/Profile/Profile'
import Error from './components/common/Error'
import Register from './pages/Register/Register'
import { Box } from '@mui/material'
import ProtectedLayout from './pages/Protected/ProtectedLayout'
const App = () => {
  return (
    <Box minHeight={'100vh'}>
      <Routes>
        <Route exact path='/' element={<ProtectedLayout/>}>
          <Route exact path='' element={<Home/>}/>
          <Route exact path='post/:id' element={<h1>Single Post</h1>}/>
          <Route exact path='search' element={<Search/>}/>
        </Route>
      </Routes>
    </Box>
  )
}

export default App
