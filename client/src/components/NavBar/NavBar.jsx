import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import './NavBar.css'
// CUIDADOOOO. SI O SI FUNCTIONAL COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
const NavBar = () => {
    
    return (
        <ul className='navBar'>
                <li><Link className='nav' to="/" > Landing Page </Link></li>
                <li><Link className='nav' to="/home" > Home </Link></li>
                <li><Link className='nav' to="/videogame/create" > Create VideoGame </Link></li>
                {window.location.pathname==='/home'?<SearchBar/>:<></>}
        </ul>
    );
};

export default NavBar;