import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css'

const Landing=()=>{
    return(
        <div className='Landing'>
            <h1>
                {/* ¡HELLO! */}
                <br />
                {/* GET READY? */}
            </h1>
            <Link to="/home">
            <button className='start'>
                Get Started
            </button>
            </Link>
        </div>
    );
};

export default Landing;