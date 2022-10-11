import './App.css';
import React from "react";
import {Route} from "react-router-dom";
import Landing from "./components/Landing/Landing"
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import CreateVideoGame from './components/CreateVideogame/CreateVideGame';
import GameDetail from './components/GameDetail/GameDetail';
import About from './components/About/About';

function App() {
  return (
      <React.Fragment>         
      <Route exact path="/" component={Landing} />
      <Route exact path="/home" component={NavBar} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/about" component={NavBar} />
      <Route exact path="/about" component={About} />
      <Route exact path="/videogame/create" component={NavBar} />
      <Route exact path="/videogame/create" component={CreateVideoGame} />
      <Route exact path="/videogames/:id" component={GameDetail} />
     
    
      </React.Fragment>
  );
}

export default App;
