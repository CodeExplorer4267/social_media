import { Avatar, Stack,Typography,Button } from '@mui/material'
import React from 'react'

const Input_comp = () => {
  return (
    <Stack flexDirection={'column'}
    width={'50%'}
    alignItems={'center'}
    m={'10px auto'}
    gap={'20px'}
    p={'10px'}
    >
       <Stack flexDirection={'row'}
       justifyContent={'space-between'}
       alignItems={'center'}
       width={'80%'}
       borderBottom={'1px solid black'}
       >
        <Stack flexDirection={'row'}
        justifyContent={'center'}
        alignItems={'center'}
        gap={'15px'}
        >
          <Avatar src='/public/home_post_avatar.jpg'/>
          <Typography>Start a post....</Typography>
        </Stack>
          <Button 
          sx={{
            bgcolor:'#7717d6',
            ":hover":{
                backgroundColor:'black'
            },
            color:'white'
          }}
          >Post</Button>
       </Stack>
       <Stack flexDirection={'row'}
       gap={'170px'}
       >
          <Button
          sx={{
            backgroundColor:'#542f79;',
            color:'white'
          }}
          variant='outlined'
          >Media</Button>
          <Button
          sx={{
            backgroundColor:'#d7e713',
            color:'black'
          }}
          variant='outlined'
          >Event</Button>
          <Button
          sx={{
            backgroundColor:'#d81616',
            color:'white'
          }}
          variant='outlined'
          >Article</Button>
       </Stack>
    </Stack>
  )
}

export default Input_comp
