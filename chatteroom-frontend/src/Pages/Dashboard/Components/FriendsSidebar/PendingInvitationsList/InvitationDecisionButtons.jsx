import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import { IconButton } from '@mui/material';
import {Box} from '@mui/material';

const InvitationDecisionButtons = ({disabled, acceptInivitationHandler, rejectInivitationHandler}) => {
  return (
    <Box
      sx={{display:'flex', gap: '5px'}}
    >
      <IconButton size="small" style={{color:'white', backgroundColor:'lightgreen'}} disabled={disabled} onClick={acceptInivitationHandler}>
      <CheckIcon style={{ color: "white" }}/>
      </IconButton>
      <IconButton size="small" style={{color:'white', backgroundColor:'red', marginRight: '5px'}} disabled={disabled} onClick={rejectInivitationHandler}>
      <ClearIcon style={{ color: "white" }}/>
      </IconButton>
    </Box>
  )
}

export default InvitationDecisionButtons