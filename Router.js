import React from 'react'; 
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Pages/Home.js';
import About from './Pages/About.js';
import Contact from './Pages/Contact.js';
import NavigationRoute from './NavigationRoute.js';
import navLinks from './NavigationConfig.js';

const router = (
  <Router>
   <NavigationRoute navLinks={navLinks}/>
  <Switch>
   <Home path="/" />
   <Contact path="/Pages/Contact" />
   <About path="/Pages/About"/>
  </Switch>
  </Router>
  )
 
export default router;