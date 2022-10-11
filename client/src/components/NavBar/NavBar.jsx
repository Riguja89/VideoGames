import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import './NavBar.css'
// CUIDADOOOO. SI O SI FUNCTIONAL COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
const NavBar = () => {

    var classNamehome='nav';
    var classNameCreategame='nav';
    var classNameAbout = 'nav'
    if(window.location.pathname==='/home')classNamehome='currentrut'
    if(window.location.pathname==="/videogame/create")classNameCreategame='currentrut'
    if(window.location.pathname==="/about")classNameAbout='currentrut'
    return (
        <ul className='navBar'>
                <li><Link className='nav' to="/" > Landing Page </Link></li>
                <li><Link className={classNamehome} to="/home" > Home </Link></li>
                <li><Link className={classNameCreategame} to="/videogame/create" > Create VideoGame </Link></li>
                <li><Link className={classNameAbout} to="/about">About</Link></li>
                {window.location.pathname==='/home'?<SearchBar/>:<></>}
                
        </ul>
    );
};

export default NavBar;