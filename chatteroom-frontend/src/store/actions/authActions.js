import * as api from '../../Functions/api'
import toast from 'react-hot-toast';

export const authActions = {
  SET_USER_DETAILS: 'AUTH_SET_USER_DETAILS'
}

export const getActions = (dispatch) => {
  return {
    login: (userDetails, history) => dispatch(login(userDetails, history)),
    register: (userDetails, history) => dispatch(register(userDetails, history)),
    setUserDetails: (userDetails) => dispatch(setUserDetails(userDetails))
  }
}

const setUserDetails = (userDetails) => {
  return {
    type: authActions.SET_USER_DETAILS,
    userDetails: userDetails
  }
}

const login = (userDetails, history) => {
  return async (dispatch) => {
    const response = await api.login(userDetails)
    console.log(response)

    if (response.error) {
      //error handling
      toast.error(response.exception.response.data)
    }
    else {
      const { userDetails } = response?.data;
      localStorage.setItem('user', JSON.stringify(userDetails))

      dispatch(setUserDetails(userDetails))
      history.push('/dashboard')
    }
  }
}

const register = (userDetails, history) => {
  return async (dispatch) => {
    const response = await api.register(userDetails)
    console.log(response)

    if (response.error) {
      //error handling
      toast.error(response.exception.response.data)
    }
    else {
      const { userDetails } = response?.data;
      localStorage.setItem('user', JSON.stringify(userDetails))

      dispatch(setUserDetails(userDetails))
      history.push('/dashboard')
    }
  }
}