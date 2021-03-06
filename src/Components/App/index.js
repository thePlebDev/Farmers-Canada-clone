import React from 'react';
import {Switch,Route} from 'react-router-dom';

import Navigation from '../Navigation';
import Home from '../Home';
import Register from '../Register';
import Login from '../Login';
import BecomeVendor from '../BecomeVendor';
import IndivGrocery from '../IndivGrocery';
import FarmName from '../FarmName';
import Cart from '../Cart'

const App =()=>{

  return(
    <>
    <Navigation />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/becomeVendor' component={BecomeVendor} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/cart' component={Cart} />
      <Route exact path='/food/:grocerName' component={IndivGrocery} />
      <Route exact path='/farm/:farmId/:FarmName' component={FarmName} />
      <Route exact path='*' component={Home} />
    </Switch>
    </>
  )
}


export default App
