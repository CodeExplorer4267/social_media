import React from 'react'
import { Stack } from '@mui/material'
import Input_comp from '../../components/home/Input_comp'
import Post from '../../components/home/Post'
const Home = () => {
  return (
    <>
    <Input_comp/>
    <Stack flexDirection={'column'}
    justifyContent={'center'}
    alignItems={'center'}
    gap={2}
    mt={'10px'}
    >
       <Post/>
    </Stack>
    </>
  )
}

export default Home
