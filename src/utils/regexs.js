const isEmail = email => {
  const emailRegexp = new RegExp('.+@.+\\..+')
  if (!emailRegexp.test(email)) {
    return false
  } else return true
}

const isPassword = password => {
  const passwordRegexp = new RegExp('.{8}.*')
  if (!passwordRegexp.test(password)) {
    return false
  } else return true
}

export { isEmail, isPassword }
