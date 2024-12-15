
import { TextField,InputAdornment } from '@mui/material'
import React from 'react'
import { FaSearch } from 'react-icons/fa'
const SearchInput = () => {
  return (
    <>
      <TextField
        sx={{
          width:'35%',
          margin:'2px auto',
          padding:'4px 10px',
          // This is a CSS selector targeting the root class of the OutlinedInput component inside the TextField. It is used to customize the style of the input field.
          '& .MuiOutlinedInput-root':{
            color:'black',
            border:'2px solid black',
            borderRadius:'30px'
          },
          
        }}
        placeholder='Search User....'
//         The slotProps prop is used to customize the slots (subcomponents) within MUI components. In this case, it's customizing the input slot.
// Customization for the input slot:

//     startAdornment:
//         This adds an adornment (a decorative or interactive element) at the start of the input field.
//         InputAdornment position="start": Creates an adornment positioned at the start of the input field.
//         <FaSearch />: Renders a search icon (assumed to be from react-icons).
        slotProps={
          {
            input:{
                startAdornment: <InputAdornment position="start"><FaSearch/></InputAdornment>,
            }
          }
        }
      />
      
    </>
  )
}

export default SearchInput
