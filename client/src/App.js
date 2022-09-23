import './App.css';
import React from "react";
import {Route} from "react-router-dom";
import Landing from "./components/Landing/Landing"
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import SearchBar from './components/SearchBar/SearchBar';
import CreateVideoGame from './components/CreateVideogame/CreateVideGame';
import GameDetail from './components/GameDetail/GameDetail';
import FilterCont from './components/Filter/Filter';

function App() {
  return (
      <React.Fragment>
      <NavBar/>
      <Route exact path="/" component={Landing} />
      <Route exact path="/home" component={SearchBar} />
      <Route exact path="/home" component={FilterCont} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/videogame/create" component={CreateVideoGame} />
      <Route exact path="/videogames/:id" component={GameDetail} />
     
    
      </React.Fragment>
  );
}

export default App;
