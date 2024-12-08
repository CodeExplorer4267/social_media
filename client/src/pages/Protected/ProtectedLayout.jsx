import { Stack } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header'
const ProtectedLayout = () => {
  return (
    <>
      <Stack flexDirection={'column'}
      maxWidth={'800px'}
      minWidth={'100%'}
      overflow={'hidden'}
      mx={'auto'}
      >
       <Header/>
       <Outlet/>
      </Stack>
    </>
  )
}

export default ProtectedLayout
