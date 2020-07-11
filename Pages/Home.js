import React from 'react';
import {navLinks} from '../NavigationConfig.js';
import NavigationRoute from '../NavigationRoute.js';
import '../Scss/toolbar.scss';

const Home = () => {
return (
<div className='home'>
 <NavigationRoute navLinks={navLinks}/>
 <p> This is Home page of your App.</p>
</div>

);
}
export default Home;