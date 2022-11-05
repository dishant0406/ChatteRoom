import axios from "axios";
import { logout } from './auth'
const apiClient = axios.create({
  baseURL: 'https://chatappdishant.herokuapp.com/',
})

apiClient.interceptors.request.use((config) => {
  const userDetails = localStorage.getItem('user')

  if (userDetails) {
    const token = JSON.parse(userDetails).token;
    config.headers.Authorization = `Bearer ${token}`
  }

  return config;
}, (err) => {
  return Promise.reject(err)
}
)

//public Roots

export const login = async (data) => {
  try {
    return await apiClient.post('/api/auth/login', data)
  }
  catch (exception) {
    return {
      error: true,
      exception,
    }
  }
}

export const register = async (data) => {
  try {
    return await apiClient.post('/api/auth/register', data)
  }
  catch (exception) {
    return {
      error: true,
      exception,
    }
  }
}

//Secured Routes

export const sendFriendInvitation = async (data) => {
  try {
    return await apiClient.post('/api/friend-invitation/invite', data)
  }
  catch (exception) {
    checkReponseCode(exception)
    return {
      error: true,
      exception
    }
  }
}

export const acceptFriendInvitation = async (data) => {
  try {
    return await apiClient.post('/api/friend-invitation/accept', data);
  } catch (exception) {
    checkReponseCode(exception)
    return {
      error: true,
      exception
    }
  }
}

export const rejectFriendInvitation = async (data) => {
  try {
    return await apiClient.post('/api/friend-invitation/reject', data);
  } catch (exception) {
    checkReponseCode(exception)
    return {
      error: true,
      exception
    }
  }
}

const checkReponseCode = (exception) => {
  const responseCode = exception?.response?.status

  if (responseCode) {
    (responseCode === 401 || responseCode === 403) && logout();
  }
}
