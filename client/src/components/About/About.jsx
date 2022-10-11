import React from 'react';
import './About.css'


const About=()=>{
    return(
        <div className='About'>
            <h1>
             VideoGames App
            </h1>
            <div className='contenido'>
            <p>
                This is an App in which you can see the different video games 
                available along with relevant information about them using an 
                external API rawg, and from it you can, among other things:
                </p>    
                <ul className='listyoucando'>
                <li>Find video games.</li><br />
                <li>Filter / Sort them.</li><br />
                <li>Add new video games.</li><br />
                </ul>
             <p>
              The App was built with libraries like React and Redux for the frontend;
              Node and Sequalize for the Backend, the database used was Sequelize - Postgres 
              and for the Deployment, Render.com and Vercel.com were used respectively. CSS is used for styles with 
              the CSS-modules technique for each component.
             </p>
                <h2>Used versions</h2>
             <ul className='listyoucando'>
                <li>react: 17.0.1</li><br />
                <li>react-dom: 17.0.1</li><br />
                <li>react-router-dom: 5.2.0</li><br />
                <li>redux: 4.0.5</li><br />
                <li>react-redux: 7.2.3</li><br />
                <li>Node: 12.18.3</li><br />
                <li>sequelize: 6.3.5</li><br />
                <li>express: 4.17.1</li><br />
                <li>pg: 8.5.1</li><br />
                <li>axios: 0.27.2</li><br />
                </ul>
             
             </div> <br />

             <div className='linksto'>
                <h3>Contact me: </h3> <br />
            <a href="https://github.com/Riguja89" target="_blank" rel="noopener noreferrer">
              <div className='git'/> 
              </a>
              <a href="https://www.linkedin.com/in/jaime-gutierrez-rios-b3143662/" target="_blank" rel="noopener noreferrer">  
              <div className='linkedin'/> 
              </a>   
             </div>

  
             
        </div>
    );
};

export default About;