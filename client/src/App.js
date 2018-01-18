import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Reviews from './components/Reviews';
import Videos from './components/Videos';
import YourLost from './components/YourLost';
import { Switch } from 'react-router-dom';
import Footer from './components/Footer'

import 'semantic-ui-css/semantic.min.css';

const App = () => (
  <div style={styles.backgroundImage}>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/About' component={About} />
      <Route path='/Reviews' component={Reviews} />
      <Route path='/Videos' component={Videos} />
      <Route component={YourLost} />
    </Switch>
    <br />
    <Footer />
  </div>

)

const styles = {
  image: {
  //  backgroundImage: "url("+ Wallpaper + ")",
    resizeMode: "stretch",
    backgroundRepeat: "no-repeat",
    flex: 1,
    alignSelf: 'stretch',
    width: null,
  },
}

export default App;
