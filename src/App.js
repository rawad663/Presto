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
             <Route exact path="/" component={LoginContainer} />
             <Route path="/signup/" component={SignupContainer} />
             <Route path="/customer" component={CustomerHomeContainer} />
             <Route path="/reservations" component={ReservationsContainer} />
             <Route path="/restaurant/profile" component={RestaurantProfileContainer} />
             <Route path="/settings" component={SettingsContainer} />
         </div>
      );
  }
}

export default App;
