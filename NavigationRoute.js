import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import './Scss/toolbar.scss';

const NavigationRoute = (props) => {
  const [navOpen,setNavOpen] = useState(false);
  const [navIndex,setnavIndex] = useState(-1);

return (
<React.Fragment>
<div className='menu' onClick = {()=> setNavOpen(!navOpen) }>Menu</div>
<nav className={navOpen == true ? 'active navBar' : 'comp navBar'}>
<ul >
<div>
<li>
<Link to='/'>Home<span class='icon'>H</span></Link>
</li>
<li>
<Link to='/Contact'>Contact<span class='icon'>C</span></Link>
</li>
<li>
<Link to='/About'>About<span class='icon'>A</span></Link>
</li>
</div>
</ul>
</nav>
</React.Fragment>
)
}

export default NavigationRoute;