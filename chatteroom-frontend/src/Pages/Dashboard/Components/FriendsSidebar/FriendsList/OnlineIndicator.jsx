import { Box } from '@mui/material'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import React from 'react'

const OnlineIndicator = () => {
  return (
    <Box
    sx={{
      color:'#3ba55d',
      display: 'flex',
      alignItems: 'center',
      position: 'absolute',
      right:'5px',
      
    }}
    >
      <FiberManualRecordIcon fontSize='small'/>
    </Box>
  )
}

export default OnlineIndicator