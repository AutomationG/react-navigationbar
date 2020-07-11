import React from 'react';
import {Link} from 'react-router-dom';
import './Scss/toolbar.scss';

const NavigationRoute = (props) => {
return (
<nav className="navBar">
<ul>
<li>
<Link to='/'>Home</Link>
</li>
<li>
<Link to='/Contact'>Contact</Link>
</li>
<li>
<Link to='/About'>About</Link>
</li>
</ul>
</nav>
)
}

export default NavigationRoute;