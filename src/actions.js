import myaxios from './myaxios'

export const loginUser = () => {
  return {
    type: 'login/loginUser'
  }
}

export const queryAnimais = (animaisDomesticos) => {
  return {
    type: 'query/animais',
    animaisDomesticos
  }
}

export async function reduxLogin({ googleToken, fcmToken }) {
  return async dispatch => {
    const response = await myaxios.post('/auth/loginWithGoogle', {googleToken})
    const token = response.data.token
    console.log(token)
    localStorage.setItem('token', response.data.token)
    await myaxios.post('/messaging/register', { token: fcmToken })
    dispatch(loginUser('legal'))
  }  
}
