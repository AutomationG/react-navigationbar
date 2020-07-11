import React from 'react'; 
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Pages/Home.js';
import About from './Pages/About.js';
import Contact from './Pages/Contact.js';

const router = (
  <Router>
  <Switch>
   <Home path="/" />
   <Contact path="/Contact" />
   <About path="/About"/>
  </Switch>
  </Router>
  )
 
export default router;