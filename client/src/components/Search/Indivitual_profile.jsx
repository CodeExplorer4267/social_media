import { Avatar, Button, Stack, Typography } from '@mui/material'
import React from 'react'

const Indivitual_profile = () => {
  return (
    <>
    <Stack flexDirection={'row'}
    justifyContent={'space-between'}
    alignItems={'center'}
    sx={{
        padding:'10px 12px',
        width:'100%',
        border:'1px solid grey',
        borderRadius:'12px',
        ":hover":{
            cursor:'pointer',
            border:'2px solid blue',
            transform:'scale(1.05)',
            transition:'transform 0.6s'
        },
        boxShadow:'5px 5px 5px grey',
        
    }}
    
    >
        <Stack flexDirection={'row'} justifyContent={'center'} alignItems={'center'}
        gap={1.5}
        >
           <Avatar src='' alt=''/>  
           <Stack flexDirection={'column'}
                  gap={0.6}
                  >
                <Typography variant='h4' fontWeight={'bold'} color='black' fontSize={'16px'}>
                     Rupam Bhadra
                </Typography>
                <Typography variant='h5' color='grey' fontStyle={'italic'} fontSize={'14px'}>
                    This is my bio.
                </Typography>
                <Typography variant='h5' color='black' fontSize={'14px'}>
                     3 followers.
                </Typography>
           </Stack>
        </Stack>
        <Button variant='contained'>Follow</Button>
    </Stack>
    </>
  )
}

export default Indivitual_profile
