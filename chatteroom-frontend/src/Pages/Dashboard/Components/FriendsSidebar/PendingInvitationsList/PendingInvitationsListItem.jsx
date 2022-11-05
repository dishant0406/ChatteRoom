import React from 'react'
import {Box, Tooltip, Typography} from '@mui/material'
import InvitationDecisionButtons from './InvitationDecisionButtons'
import Avatar from '../../../../../Components/Avatar/Avatar';
import {connect} from 'react-redux'
import {getActions} from '../../../../../store/actions/friendsAction'

const PendingInvitationsListItem = ({
  id,
  username,
  mail,
  acceptFriendInvitation=()=>{},
  rejectFriendInvitation=()=>{}
}) => {
  const [buttonDisabled, setButtonDisabled] = React.useState(false);

  const handleAcceptInvitation = ()=>{
    acceptFriendInvitation({id})
    setButtonDisabled(true)
  }

  const handleRejectInvitation = ()=>{
    rejectFriendInvitation({id})
    setButtonDisabled(true)
  }

  console.log(mail)

  return (
    <Tooltip title={mail}>
      <div style={{
        width: '90%',
        backgroundColor:'#fff',
        padding: '10px 0',
        boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1)',
        borderRadius: '10px'
        }}>
        <Box
          sx={{
            width: '100%',
            height: '42px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Avatar username={username}/>
          <Typography 
            sx={{
              marginLeft: '7px',
              fontWeight:700,
              color: '#8e9297',
              flexGrow: 1
            }}
            variant='subtitle1'
          >{username}</Typography>
          <InvitationDecisionButtons
            disabled={buttonDisabled}
            acceptInivitationHandler={handleAcceptInvitation}
            rejectInivitationHandler={handleRejectInvitation}
          />
        </Box>
      </div>
    </Tooltip>
  )
}

const mapActionsToProps = (dispatch)=>{
  return {
    ...getActions(dispatch)
  }
}

export default connect(null, mapActionsToProps)(PendingInvitationsListItem)