import React from 'react'
import { Stack } from '@mui/material'
import Indivitual_profile from './Indivitual_profile'
const Profilebar = () => {
  return (
    <>
     <Stack flexDirection={'column'}
     alignItems={'center'}
     width={'40%'}
     margin={'15px auto'}
     padding={'10px 10px'}
     gap={2.5}
     >
        <Indivitual_profile/>
        <Indivitual_profile/>
        <Indivitual_profile/>
        <Indivitual_profile/>
     </Stack>
    </>
  )
}

export default Profilebar
