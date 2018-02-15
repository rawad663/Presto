import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CustomerHomeContainer from './containers/CustomerHomeContainer';
import LoginContainer from './containers/LoginContainer';
import ReservationsContainer from './containers/ReservationsContainer';
import RestaurantProfileContainer from './containers/RestaurantProfileContainer';
import SettingsContainer from './containers/SettingsContainer';
import './App.css';

class App extends Component {

  render() {
      // return a Route component that loads up respective Components based on URL path
      return (
         <div>
             <Route path="/customer" component={CustomerHomeContainer} />
             <Route path="/login" component={LoginContainer} />
             <Route path="/reservations" component={ReservationsContainer} />
             <Route path="/restaurantprofile" component={RestaurantProfileContainer} />
             <Route path="/settings" component={SettingsContainer} />
         </div>
      );
  }
}

export default App;
