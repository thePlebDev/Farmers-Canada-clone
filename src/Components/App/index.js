import React from 'react';
import {Switch,Route} from 'react-router-dom'

import Navigation from '../Navigation'
import Home from '../Home'


const App =()=>{

  return(
    <>
    <Navigation />
    <Switch>
      <Route exact path='/' component={Home} />

    </Switch>
    </>
  )
}


export default App
