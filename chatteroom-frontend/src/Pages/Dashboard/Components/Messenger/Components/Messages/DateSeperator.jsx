import React from 'react'
import { styled } from '@mui/system'

const Seperator = styled('div')({
  width: '95%',
  backgroundColor: '#2c303e',
  height: '1px',
  position: 'relative',
  marginTop:'20px',
  marginBottom:'10px',
})

const DateLabel = styled('span')({
    backgroundColor: '#fff',
    position: 'absolute',
    left:'45%',
    top:'-10px',
    color:'#2c303e',
    padding:'0 5px',
    fontSize:'14px',
    fontFamily:'Poppins',
    fontWeight:'bold'
})

const DateSeperator = ({date}) => {
  return (
    <Seperator>
      <DateLabel>{date}</DateLabel>
    </Seperator>
  )
}

export default DateSeperator