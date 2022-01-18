import React from 'react';
import {NavLink} from 'react-router-dom';

function Nav () {
    return(
        <nav>
            <div className="logo">
                loremIpsum
            </div>
            <ul>
                <li><NavLink to='/'>home</NavLink></li>
                <li><NavLink to='/about'>about</NavLink></li>
                <li><NavLink to='/contact'>contact us</NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;
