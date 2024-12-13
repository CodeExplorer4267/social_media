import { Avatar, AvatarGroup, Badge, Stack, Stepper } from '@mui/material'
import React from 'react'

const PostOne = () => {
  return (
    <Stack flexDirection={'column'}
    justifyContent={'space-between'}
    alignItems={'center'}
    >
      <Badge 
      overlap='circular'
      anchorOrigin={{vertical:'bottom',horizontal:'right'}}
      badgeContent={
        <Avatar sx={{
            position: 'relative',
            height: 17,
            width: 17,
            top: -5,
            right: 4,
            bgcolor:'black'
        }}>
            +
        </Avatar>
      }
      >
         <Avatar alt='AJ' sx={{
            height:40,
            width:40
         }}/>
      </Badge>
      <Stack flexDirection={'column'}
      alignItems={'center'}
      gap={2}
      height={'100%'}
      >
    <Stepper orientation='vertical'
      activeStep={0}
      sx={{
        border:'1px solid grey',
        width:0,
        height:'100%',
      }}
      >
      </Stepper>
      <AvatarGroup max={3}
        sx={{
          "& .MuiAvatar-root":{
            width:20,
            height:20,
            fontSize:12,
          }
        }}
        >
           <Avatar src='' alt=''/>
           <Avatar src='' alt=''/>
           <Avatar src='' alt=''/>
           <Avatar src='' alt=''/>
        </AvatarGroup>
      </Stack>
    </Stack>
  )
}

export default PostOne
