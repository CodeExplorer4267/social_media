import { Avatar, Stack, Typography,Button } from '@mui/material'
import React from 'react'
import { FaBiohazard } from "react-icons/fa";

const ProfileLayout = () => {
  return (
    <>
    <Stack flexDirection={'column'}
    alignItems={'center'}
    gap={1.5}
    sx={{
      margin:'auto',
      width:'40%',
      border:'1px solid black',
      height:'600px',
    }}
    >
      <Stack sx={{
        background:'url("error_page_background.webp")',
        height:'100px',
        width:'100%',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
      }}>
         <Avatar src='' alt=''
         sx={{
          position:'relative',
          top:'57%',
          left:'43%',
          height:'86px',
          width:'86px'
         }}
         />
      </Stack>
      <Stack flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      gap={1}
      sx={{
        marginTop:'35px',
        padding:'5px 10px'
      }}
      >
        <Typography variant='h5' fontSize={'20px'} fontWeight={'bold'}>Rupam Bhadra</Typography>
        <Typography>19 Followers</Typography>
      </Stack>
      <Stack 
      p={'6px 12px'}
      sx={{
        margin:'0px auto',
        bgcolor:'#bcecffba',
        border:'1px solid black',
        borderRadius:'10px',
        width:'70%'
      }}
      flexDirection={'column'}
      alignItems={'center'}
      >
        <FaBiohazard/>
        <Typography fontSize={'16px'}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla magnam distinctio impedit debitis ratione quo optio repellat, velit culpa aperiam ea qui eum modi consectetur maiores fugiat quaerat inventore esse minus saepe deleniti itaque.
        </Typography>
      </Stack>
      <Button variant="outlined"
      sx={{
        margin:'15px auto',
        width:'45%',
        ":hover":{
          backgroundColor:'#1976d2',
          color:'white'
        }
      }}
      >Edit Profile</Button>
      <Stack flexDirection={'row'} justifyContent={'space-evenly'}
      alignItems={'center'}
      margin={'15px auto'}
      width={'100%'}
      >
        <Typography>Posts</Typography>
        <Typography>Replies</Typography>
        <Typography>Reposts</Typography>
        <Typography>Saves</Typography>
      </Stack>
    </Stack>
    </>
  )
}

export default ProfileLayout