import React from 'react'
import {styled} from '@mui/system'
import Avatar from '../../../../../../Components/Avatar/Avatar'
import { Typography } from '@mui/material'

const MainContainer = styled('div')({
  width: '97%',
  display: 'flex',
  marginTop: '10px',
})

const AvatarContainer = styled('div')({
  width: '70px',
})

const MessageContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
})

const MessageContent = styled('div')({
  color: '#fff',
  backgroundColor: '#725af2',
  padding: '5px 20px',
  borderRadius: '20px',
  marginBottom: '10px'
})

const SameAuthorMessageContent = styled('div')({
  color: '#1f1f1f',
  width: '97%',
  marginBottom: '10px',
  display: 'flex',
})

const SameAuthorMessageText = styled('span')({
  marginLeft:'70px',
  color: '#fff',
  backgroundColor: '#725af2',
  padding: '5px 20px',
  borderRadius: '20px',


})

const Message = ({content, sameAuthor, username, date, sameDay, user, authorId}) => {
  const [isWriter, setIsWriter] = React.useState('b');

  React.useEffect(() => {
    if(user!==authorId){
      setIsWriter('a');
    }
  }, [setIsWriter])
  

  if(sameAuthor && sameDay) {
    return (
      <SameAuthorMessageContent style={user===authorId ? {justifyContent: 'flex-end'} :{}}>

      <SameAuthorMessageText style={user===authorId ? {marginRight: '70px'} :{backgroundColor:'#2c303e', color:'white'}}>
        {content}
      </SameAuthorMessageText>
      </SameAuthorMessageContent>
    )
  }
  
  

  return <MainContainer style={user===authorId ? {justifyContent: 'flex-end'} :{}}>
    {user!==authorId && <AvatarContainer>
      <Avatar writer={isWriter}/>
    </AvatarContainer>}
    <MessageContainer >
      <Typography sx={user===authorId ?{fontSize:'16px', color:'#000', fontWeight:'bold', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap:'5px'}: {fontSize:'16px', color:'#000', fontWeight:'bold'}}>
        {username}{'  '}
        <span style={{fontSize:'12px', color:'#72767D'}}>{date}</span>
      </Typography>
      <MessageContent style={user!==authorId? {backgroundColor:'#2c303e', color:'white'}:{}}>{content}</MessageContent>
    </MessageContainer>
    {user===authorId && <AvatarContainer>
      <Avatar/>
    </AvatarContainer>}
  </MainContainer>
}

export default Message