import React from 'react'
import {styled} from '@mui/material'
import {logout} from '../../Functions/auth'
import SideBar from './Components/Sidebar/Sidebar'
import FriendSidebar from './Components/FriendsSidebar/FriendSidebar'
import Messenger from './Components/Messenger/Messenger'
import AppBar from './Components/AppBar/AppBar'
import {connect} from 'react-redux'
import {getActions} from '../../store/actions/authActions'
import { connectWithSocketServer } from '../../realTimeCommunication/socketConnection'


const Wrapper = styled('div')({
  width: '100%',
  height: '100vh',
  display: 'flex',
})

const Dashboard = ({setUserDetails}) => {

  React.useEffect(()=>{
    const userDetails = localStorage.getItem('user');

    if(!userDetails) {
      logout();
    }else{
      setUserDetails(JSON.parse(userDetails))
      connectWithSocketServer(JSON.parse(userDetails));
    }
  },[setUserDetails])
  return (
    <Wrapper>
      {/* <SideBar/> */}
      <FriendSidebar/>
      <Messenger/>
      <AppBar/>
    </Wrapper>
  )
}

const mapActionsToProps  = (dispatch)=>{
  return {
    ...getActions(dispatch)
  }
}

export default connect(null, mapActionsToProps)(Dashboard)