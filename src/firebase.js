import { initializeApp } from 'firebase/app'

import { getMessaging, getToken, onMessage } from 'firebase/messaging'

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
const firebaseApp = initializeApp({})

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = getMessaging(firebaseApp)

export const requestForToken = (setTokenFound, setToken) => {
  return getToken(messaging, {
    vapidKey:
      'AIzaSyB5Km3RdN-pIIID72SEr3xOC7E_3CeuhJg'
  })
    .then(currentToken => {
      if (currentToken) {
        console.log('token atual: ', currentToken)
        setTokenFound(true)
        setToken(currentToken)
      } else {
        console.log('Falta permissao')
      }
    })
    .catch(err => console.log('Um erro aconteceu - ', err))
}

export const onMessageListener = () => {
  new Promise(resolve => {
    onMessage(messaging, payload => {
      resolve(payload)
    })
  })
}
