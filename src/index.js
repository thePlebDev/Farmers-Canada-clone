import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import { createGlobalStyle } from 'styled-components';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

import App from './Components/App'
import rootReducer from './Reducers'

const store = createStore(rootReducer)

const GlobalStyle = createGlobalStyle`
  body{
    margin:0;
    padding:0;
    overflow-x: hidden;
    box-sizing:border-box;
  }

`


ReactDOM.render(
  <Router>
    <Provider store={store}>
      <GlobalStyle/>
        <App/>
    </Provider>
  </Router>,document.getElementById('root'))
