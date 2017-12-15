import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Professional from './components/Professional'
import Family from './components/Family'
import Hobbies from './components/Hobbies'
import YourLost from './components/YourLost'
import { Switch } from 'react-router-dom'

const App = () => (
  <div>
  <Switch>
  <Route exact path='/' component={Home} />
  <Route path='/Professional' component={Professional} />
  <Route path='/Family' component={Family} />
  <Route path='/Hobbies' component={Hobbies} />s
  <Route component={YourLost} />
  </Switch>
  </div>

)


export default App;
