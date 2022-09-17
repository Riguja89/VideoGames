import './App.css';
import React from "react";
import {Route} from "react-router-dom";
import Landing from "./components/Landing/Landing"
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import SearchBar from './components/SearchBar/SearchBar';
import CreateVideoGame from './components/CreateVideogame/CreateVideGame';

function App() {
  return (
      <React.Fragment>
      <NavBar/>
      <Route exact path="/" component={Landing} />
      <Route exact path="/home" component={SearchBar} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/videogame/create" component={CreateVideoGame} />
      {/* <Route exact path="/house/create" component={CreateHouse} />
      <Route exact path="/houses/:houseId" component={HouseDetail} /> */}
      
      </React.Fragment>
  );
}

export default App;
