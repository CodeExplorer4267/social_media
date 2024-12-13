import { Stack,Typography } from '@mui/material'
import React from 'react'
import { SlOptions } from "react-icons/sl";
import PostOne from './post/PostOne';
import PostTwo from './post/PostTwo';

const Post = () => {
  return (
    <Stack flexDirection={'row'}
    justifyContent={'space-between'}
    mx={'auto'}
    width={'50%'}
    border={'1px solid black'}
    borderRadius={'10px'}
    sx={{
       ":hover":{
          cursor:'pointer',
          
       },
       padding:'20px' 
    }}
    
    >
       <Stack flexDirection={'row'}
       gap={2}
       >
           <PostOne/>
           <PostTwo/>
       </Stack>
       <Stack flexDirection={'row'}
       justifyContent={'center'}
       alignSelf={'flex-start'}
      gap={2}
       >
          <Typography variant='h3' sx={{
             color:'grey',
             fontSize:'15px'
          }}>
             24h
          </Typography>
          <SlOptions/>
       </Stack>
    </Stack>
  )
}

export default Post
