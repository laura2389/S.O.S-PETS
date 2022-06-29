const initialState = {
  loggedIn: false,
  animaisDomesticos: []
}

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'login/loginUser':
      return {
        ...state,
        loggedIn: true
      }
      case 'query/animais':
      return {
        ...state,
        animaisDomesticos: action.animaisDomesticos
      }

    default:
      return state
  }
}
