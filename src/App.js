import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import './App.css';
import Settings from './components/Settings';
import image from "./images/background.jpg"


class App extends Component {
   render() {
      return (
         <BrowserRouter >
            <div style={{ backgroundImage: `url(${image})`, width: '100%' }}>
            <Navigation></Navigation>
               <Switch>
                  <Route path="/" component={Home} exact></Route>
                  <Route path="/Settings" component={Settings} exact></Route>
               </Switch>
            </div>
         </BrowserRouter>
      );
   }
}

export default App;
