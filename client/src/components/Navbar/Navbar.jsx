import React from 'react'
import { FaHome } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { MdEditSquare } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <Stack
    flexDirection={'row'}
    justifyContent={'center'}
    alignItems={'center'}
    gap={9}
    height={50}
    bgcolor={'aliceblue'}
    width={500}
    margin={'auto'}
    borderRadius={10}
    position={'sticky'}
    >
      <Link to='/'><FaHome size={25} cursor={'pointer'} color='black'/></Link>
      <Link to='/search'><IoSearch size={25} cursor={'pointer'} color='black'/></Link>
      <MdEditSquare size={25} cursor={'pointer'}/>
      <Link to='/notification'><IoMdNotifications size={25} cursor={'pointer'} color='black'/></Link>
      <Link to='/profile'><CgProfile size={25} cursor={'pointer'} color='black'/></Link>
    </Stack>
  )
}

export default Navbar
