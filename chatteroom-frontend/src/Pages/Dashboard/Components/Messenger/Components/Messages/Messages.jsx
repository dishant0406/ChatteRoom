import React, {useRef, useEffect} from 'react'
import { styled } from '@mui/system' 
import MessagesHeader from './MessagesHeader'
import Message from './Message'
import {connect} from 'react-redux'
import DateSeperator from './DateSeperator'
import useSound from 'use-sound';
import soundfx from '../../../../../../assets/soundfx.mp3'

const MainContainer = styled('div')({
  height: `calc(100%-60px)`,
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

const convertDateToHumanReadable = (date, format) => {
  const map = {
    mm: date.getMonth() + 1,
    dd: date.getDate(),
    yy: date.getFullYear().toString().slice(-2),
    yyyy: date.getFullYear(),
  };

  return format.replace(/mm|dd|yy|yyy/gi, (matched) => map[matched]);
};


const Messages = ({chosenChatDetails, messages, user}) => {
  const messageEl = useRef(null);
  const [play] = useSound(soundfx)

  useEffect(() => {
    if (messageEl) {
      messageEl.current.addEventListener('DOMNodeInserted', event => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
      });
    }
  }, [])

  useEffect(() => {
    if(messages!==[]){
    if( messages[messages.length - 1]?.author._id !== user){
      play()
    }
  }
  },[messages])

  return (
    <MainContainer ref={messageEl}>
      <MessagesHeader name={chosenChatDetails?.name}/>
      {messages.map((message,index)  =>{
        const sameAuthor = index > 0  && messages[index].author._id===messages[index -1].author._id;

        const sameDay = index > 0 && convertDateToHumanReadable(new Date(message.date), 'dd/mm/yy') === convertDateToHumanReadable(new Date(messages[index-1].date), 'dd/mm/yy')

        return (
          <div key={message._id} style={{width: '97%'}}>
            {(!sameDay || index ===0) && (
              <DateSeperator date={convertDateToHumanReadable(new Date(message.date), 'dd/mm/yy')}/>
            )}
        <Message content={message.content} user={user} authorId={message.author._id} username={message.author.username} sameAuthor={sameAuthor} date={convertDateToHumanReadable(new Date(message.date), 'dd/mm/yy')} sameDay={sameDay}/>
        </div>
        )
      })}
    </MainContainer>
  )
}

const mapStoreStateToProps = ({chat})=>{
  return {
    ...chat
  }
}

export default connect(mapStoreStateToProps)(Messages)