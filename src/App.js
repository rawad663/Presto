import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CustomerHomeContainer from './containers/CustomerHomeContainer';
import LoginContainer from './containers/LoginContainer';
import ReservationsContainer from './containers/ReservationsContainer';
import RestaurantProfileContainer from './containers/RestaurantProfileContainer';
import SettingsContainer from './containers/SettingsContainer';
import './App.css';
import SignupContainer from "./containers/SignupContainer";

class App extends Component {

  render() {
      // return a Route component that loads up respective Components based on URL path
      return (
         <div>
             <Route path="/signup/" component={SignupContainer} />
             <Route exact path="/" component={CustomerHomeContainer} />
             <Route exact path="/" component={LoginContainer} />
             <Route exact path="/" component={ReservationsContainer} />
             <Route exact path="/" component={RestaurantProfileContainer} />
             <Route exact path="/" component={SettingsContainer} />
         </div>
      );
  }
}

export default App;
