import {React,useNa} from 'react'
import {Stack,Typography,Button} from "@mui/material"
import {useNavigate} from "react-router-dom"
const Error = () => {
    const navigate=useNavigate();
  return (
    <Stack width={'100%'}
    flexDirection={'row'}
    height={'100vh'}
    justifyContent={'center'}
    alignItems={'center'}
    sx={{
        background:'url(error_page_background.webp)',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover'
    }}
    >
        <Stack height={300}
         width={400} 
         bgcolor={'white'}
         flexDirection={'column'}
         justifyContent={'center'}
         alignItems={'center'}
         borderRadius={10}
         border={'2px solid black'}
        >
            <Typography variant='h3'>OOP's</Typography>
            <Typography variant='h6'>You entered wrong location</Typography>
            <Button variant='contained' sx={{marginTop:'30px'}} onClick={()=>{
                navigate('/')
            }}
            >Go Back</Button>
        </Stack>
    </Stack>
  )
}

export default Error
