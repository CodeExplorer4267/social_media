import React from 'react'
import {Stack,CircularProgress} from "@mui/material"
const Loading = () => {
  return (
    <div>
      <Stack
      flexDirection={"row"}
      justifyContent={"center"}
      alignItems={"center"}
      minHeight={"50vh"}
      height={"100%"}
      width={"100%"}
      my={9}
      >
        <CircularProgress
        color='secondary'
        />
      </Stack>
    </div>
  )
}

export default Loading
