import React from "react"
import {Route, Switch} from "react-router"
import { BrowserRouter } from "react-router-dom";
import './styles.css'

import Home1 from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar"

const App=()=> {
  return (
    <BrowserRouter>
         <Navbar/>
        <Switch>
          <Route path="/" exact><Login /></Route>
          <Route path="/signup" exact><Signup /></Route>
          <Route path="/home"><Home1/></Route>
        </Switch>
    </BrowserRouter>
        
     
  );
}

export default App;
