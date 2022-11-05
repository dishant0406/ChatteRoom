import React, {useEffect, useState} from 'react'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import  Typography  from '@mui/material/Typography'
import Button from '@mui/material/Button'
import {validateMail} from '../../../../Functions/ValidateForm'
import  DialogTitle  from '@mui/material/DialogTitle'
import {connect} from 'react-redux'
import {getActions} from '../../../../store/actions/friendsAction'

const AddFriendDialog = ({
  isDialogOpen, 
  closeDialogHandler,
  sendFriendInvitation = ()=>{}
}) => {
  const [mail, setMail] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const handleSendInvitation = ()=>{
    //send invitation
    sendFriendInvitation({
      targetMailAddress : mail,
    }, handleCloseDialog)
  }

  const handleCloseDialog = ()=>{
    //close dialog
    closeDialogHandler();
    setMail('');
  }
  useEffect(()=>{
      setIsFormValid(validateMail(mail))
  },[mail, setIsFormValid])

  return (
    <div>
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>
          <Typography>Invite a Friend</Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <Typography>Enter e-mail address of friend which you would like to invite</Typography>
            </DialogContentText>
              <input type="text" className="invite-friend-input" placeholder="Enter Mail Address" value={mail} onChange={(e)=>setMail(e.target.value)}/>
          
          <DialogActions>
          <Button
            style={{
              width:'100%',
              height:'35px',
              borderRadius: '5px',
              margin: '0',
              padding: '0',
              minWidth: '0',
              marginTop: '10px',
              color: isFormValid ? 'white': '#9b9c9f',
              backgroundColor: isFormValid ? '#5865F2': '#5e6165'
            }}
            onClick={handleSendInvitation}
            disabled={!isFormValid}
            >
              Send
            </Button>
          </DialogActions>
          </DialogContent>
      </Dialog>
    </div>
  )
}

const mapActionsToProps = (dispatch) =>{
  return {
    ...getActions(dispatch)
  }
}

export default connect(null, mapActionsToProps)(AddFriendDialog)