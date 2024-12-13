import { Stack, Typography } from '@mui/material'
import React from 'react'
import { AiFillLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
const PostTwo = () => {
  return (
    <>
      <Stack flexDirection={'column'}
      justifyContent={'space-between'}
      gap={2}
      >
        <Stack flexDirection={'column'}
        gap={1}
        >
         <Stack flexDirection={'column'}
         >
           <Typography variant='h3' fontSize={'15px'} color='black' fontWeight={'bold'}>
              Rupam Bhadra
           </Typography>
           <Typography variant='h5' fontSize={'17px'} color='grey'>
              I am student of Btech IT.
           </Typography>
         </Stack>
         <img src="error_page_background.webp" alt="Error" 
         width={'200px'}
         height={'200px'}
         />
         </Stack>
         <Stack flexDirection={'row'}
          justifyContent={'flex-start'}
           gap={3}
           alignItems={'center'}
           >
            <AiFillLike size={'22px'}/>
            <FaRegComment size={'22px'}/>
            <FaShareAlt size={'22px'}/>
            <BiRepost size={'22px'}/>
         </Stack>
         <Stack flexDirection={'row'}
         gap={1}
         >
           <Typography fontWeight={'bold'} variant='caption' color='grey'>2 Likes.</Typography>
           <Typography fontWeight={'bold'} variant='caption' color='grey'>1 Comment</Typography>
         </Stack>
      </Stack>
    </>
  )
}

export default PostTwo
