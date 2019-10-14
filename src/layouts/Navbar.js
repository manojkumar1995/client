import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ title }) => {
    return (
        <div className='navbar bg-primary'>
            <h2>{title}</h2>
            <ul>
                <li>
                    <Link to='/users'>Users</Link>
                </li>
                <li>
                    <Link to='/posts'>Posts</Link>
                </li>
            </ul>
        </div>
    )
}

Navbar.defaultProps = {
    title: 'Terabiz'
}


export default Navbar
