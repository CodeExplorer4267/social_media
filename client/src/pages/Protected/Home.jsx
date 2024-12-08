import React from 'react'
import { Stack } from '@mui/material'
import Input_comp from '../../components/home/Input_comp'
const Home = () => {
  return (
    <>
    <Input_comp/>
    <Stack flexDirection={'column'}
    justifyContent={'center'}
    alignItems={'center'}
    gap={2}
    >
       <p>Post</p>
       <p>Post</p>
       <p>Post</p>
       <p>Post</p>
       <p>Post</p>
    </Stack>
    </>
  )
}

export default Home
