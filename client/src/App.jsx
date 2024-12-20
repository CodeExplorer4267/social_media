import React from 'react'
import Loading from './components/common/Loading'
import { Routes,Route, Router } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Protected/Home'
import Search from './pages/Protected/Search'
import Notification from './pages/Notification/Notification'
import Error from './components/common/Error'
import Register from './pages/Register/Register'
import { Box } from '@mui/material'
import ProtectedLayout from './pages/Protected/ProtectedLayout'
import ProfileLayout from './pages/Protected/Profile/ProfileLayout'
import UserPost from './pages/Protected/Profile/UserPost'
import Replies from './pages/Protected/Profile/Replies'
import Repost from './pages/Protected/Profile/Repost'
import Save from './pages/Protected/Profile/Save'
const App = () => {
  return (
    <Box minHeight={'100vh'}>
      <Routes>
        <Route exact path='/' element={<ProtectedLayout/>}>
          <Route exact path='' element={<Home/>}/>
          <Route exact path='post/:id' element={<h1>Single Post</h1>}/>
          <Route exact path='search' element={<Search/>}/>
          <Route exact path='profile' element={<ProfileLayout/>}>
              <Route exact path='posts/:id' element={<UserPost/>}/>
              <Route exact path='replies/:id' element={<Replies/>}/>
              <Route exact path='reposts/:id' element={<Repost/>}/>
              <Route exact path='saves/:id' element={<Save/>}/>
          </Route>
        </Route>
      </Routes>
    </Box>
  )
}

export default App
