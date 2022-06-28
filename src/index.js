import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style/index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, HashRouter } from 'react-router-dom'

import reducer from "./reducers"
import { Provider } from 'react-redux'

const store = createStore(reducer, null);

ReactDOM.render(
  <Provider store={store} >
  <HashRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HashRouter>
  </Provider>,
  document.getElementById('root')
)

reportWebVitals()
