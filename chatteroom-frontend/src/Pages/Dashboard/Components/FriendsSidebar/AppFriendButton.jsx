import React from 'react'
import Button from '@mui/material/Button'
import AddFriendDialog from './AddFriendDialog';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';


const AppFriendButton = () => {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const handleOpenFriendDialog =(e)=>{
    setIsDialogOpen(true)
  }

  const handleCloseFriendDialog =(e)=>{
    setIsDialogOpen(false)
  }

  return (
    <>
    <Button
    style={{

      clipPath: 'circle(50%)',
      height: '4em',
      width: '4em',
      margin: '0',
      padding: '0',
      minWidth: '0',
      marginTop: '10px',
      color: 'white',
      backgroundColor: '#b74cfa',
      position:'absolute',
      bottom: '10px',
      left: '10px',
    }}
    onClick={handleOpenFriendDialog}
    >
      <PersonAddAltIcon/>
    </Button>
    <AddFriendDialog isDialogOpen={isDialogOpen} closeDialogHandler={handleCloseFriendDialog}/>
    </>
  )
}

export default AppFriendButton