import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
    
    return (
        <nav>
            <ul className="flex-row">
            <li className="mx-2">
                <Link to="oscar/">About Me</Link>
            </li>
            <li className = "mx-2" >
                <Link to="oscar/portfolio">Portfolio</Link>
            </li>
            <li className = "mx-2" >
                <Link to="oscar/contact">Contact</Link>
            </li>
            </ul>  
        </nav>
    )
}

export default Nav;