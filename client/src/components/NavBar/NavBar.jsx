import React from 'react';
import { Link } from 'react-router-dom';

// CUIDADOOOO. SI O SI FUNCTIONAL COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
const NavBar = () => {
    
    return (
        <div>
                <Link to="/" >| Landing Page |</Link>
                <Link to="/home" >| Home |</Link>
                <Link to="/videogame/create" >| Create VideoGame |</Link>
                
        </div>
    );
};

export default NavBar;