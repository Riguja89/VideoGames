import React from 'react';
import { Link } from 'react-router-dom';

const Landing=()=>{
    return(
        <div>
            <h1>
                Ahora si, esto apenas empieza
                <br />
                This is the Landing Page
            </h1>
            <Link to="/home">
            <button >
                Iniciar 
            </button>
            </Link>
        </div>
    );
};

export default Landing;