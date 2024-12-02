import React from 'react'
import "./Header.css"
import Navbar from '../Navbar/Navbar'
import { HiMenu } from "react-icons/hi";
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className='header_container'>
      <div className="logo">
        <Link to={'/'}><img src="website_logo.jpg" alt="" /></Link>
      </div>
      <div className="middle_navbar">
        <Navbar/>
      </div>
      <div className="sidebar">
        <Stack>
         <HiMenu size={30} cursor={'pointer'}/>
         </Stack>
      </div>
    </div>
  )
}

export default Header
