import React from 'react';
import { Link } from 'react-router-dom';

function Nav () {
    return(
        <nav>
            <div className="logo">
                loremIpsum
            </div>
            <ul>
                <li><Link to='/'>home</Link></li>
                <li><Link to='/about'>about</Link></li>
                <li><Link to='/contact'>contact us</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;
