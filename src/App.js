import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import LoginContainer from './containers/LoginContainer';
import './App.css';

class App extends Component {

  render() {
      // return a Route component that loads up respective Components based on URL path
      return (
         <div>
             <Route exact path="/" component={LoginContainer} />
         </div>
      );
  }
}

export default App;
