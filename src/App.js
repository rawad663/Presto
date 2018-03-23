import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CustomerHomeContainer from './containers/CustomerHomeContainer';
import LoginContainer from './containers/LoginContainer';
import CustomerReservationsContainer from './containers/CustomerReservationsContainer';
import LikedRestaurantsContainer from './containers/LikedRestaurantsContainer';
import RestaurantProfileContainer from './containers/RestaurantProfileContainer';
import SettingsContainer from './containers/SettingsContainer';
import SignupContainer from "./containers/SignupContainer";
import ProfileEditContainer from "./containers/ProfileEditContainer";
import ProfileContainer from './containers/ProfileContainer';

import './css/App.css';
import './css/Animations.css';


class App extends Component {

  render() {
      // return a Route component that loads up respective Components based on URL path
      return (
         <div>
             <Route exact path="/" component={LoginContainer} />
             <Route path="/signup" component={SignupContainer} />

             <Route exact path="/customer" component={CustomerHomeContainer} />
             <Route path="/customer/reservations" component={CustomerReservationsContainer} />
             <Route path="/customer/liked" component={LikedRestaurantsContainer} />
             <Route path="/customer/profile" component={ProfileContainer} />

             <Route path="/restaurant/profile" component={RestaurantProfileContainer} />
             <Route path="/settings" component={SettingsContainer} />
             <Route path="/customer-profile" component={ProfileEditContainer} />
         </div>
      );
  }
}

export default App;
