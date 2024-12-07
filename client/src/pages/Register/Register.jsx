import { Stack,Typography,Button } from '@mui/material'
import React from 'react'
import "./Register.css"
const Register = () => {
  return (
    <Stack flexDirection={'row'}
    justifyContent={'center'}
    alignItems={'center'}
    height={'100vh'}
    m={0}
    p={0}
    >
     <Stack width={'50%'} 
     height={'100vh'}
     sx={{
        backgroundImage:'url("register_background.jpg")',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover'
     }}
     flexDirection={'column'}
     justifyContent={'center'}
     alignItems={'center'}
     >
         <Stack flexDirection={'column'}
          width={'50%'}
          gap={2}
          bgcolor={'white'}
          height={'45vh'}
          border={'2px solid black'}
          borderRadius={'30px'}
          p={'20px'}
         >
           <Typography variant='h5' 
           alignSelf={'center'}
           p={'20px'}
           fontWeight={'bold'}
           color='#5d12a3'
           >
              Register with Email
           </Typography>
           <input type="text" placeholder='Enter your name' />
           <input type="email" placeholder='Enter your email' />
           <input type="password" placeholder='Enter password' />
           <button id='register_btn'>Sign Up</button>
           <p className='register_login'>Already have an account?<span className='login'>Login Here</span></p>
         </Stack>
     </Stack>
     <Stack width={'50%'} 
     height={'100vh'}
      sx={
        {
            backgroundImage:'url("register_side.png")',
            backgroundRepeat:'no-repeat',
            backgroundSize:'cover'
        }
      }
     >
        
     </Stack>
    </Stack>
  )
}

export default Register
