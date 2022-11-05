export const loginValidate = (mail, password) => {
  const isMailValid = validateMail(mail)
  const isPasswordValid = validatePassword(password)

  return isMailValid && isPasswordValid
}

export const registerValidate = (mail, password, username) => {
  const isMailValid = validateMail(mail)
  const isPasswordValid = validatePassword(password)
  const isUsernameValid = validateUsername(username)

  return isMailValid && isPasswordValid && isUsernameValid
}

export const validateMail = (mail) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(mail)
}

const validatePassword = (password) => {
  return password.length >= 6 && password.length <= 12
}


const validateUsername = (username) => {
  var usernamePattern = /^[a-zA-Z0-9]+$/;


  return usernamePattern.test(username) && username.length >= 3 && username.length <= 12
}

