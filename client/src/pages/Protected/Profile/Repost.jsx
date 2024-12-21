import React from 'react'
import { Stack } from '@mui/material'
import Post from '../../../components/home/Post'
const Repost = () => {
  return (
    <>
    <Stack flexDirection={'column'}
    alignItems={'center'}
    gap={2}
    mx={'auto'}
    p={'5px 10px'}
    width={'75%'}
    mb={10}
    mt={'10px'}
    >
      <Post/>
      <Post/>
      <Post/>
    </Stack>
    </>
  )
}

export default Repost
