import './App.css';
import React from "react";
import {Route} from "react-router-dom";
import Landing from "./components/Landing/Landing"
import Home from './components/Home/Home';
function App() {
  return (
      <React.Fragment>
    {/* <Nav/> */}
      <Route exact path="/" component={Landing} />
      <Route exact path="/home" component={Home} />
      {/* <Route exact path="/house/create" component={CreateHouse} />
      <Route exact path="/houses/:houseId" component={HouseDetail} /> */}
      
      </React.Fragment>
  );
}

export default App;
