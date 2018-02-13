import React, { Component } from 'react';
import LoginComponent from '../../components/LoginComponent';

export default class LoginContainer extends Component {

    constructor(props) {
        super(props);
        // initialize state here, use this.setState() outside of constructor to set the value
        this.state = {
            // state properties
            welcome: ''
        };
    }

    // react lifecycle, triggers only once when component first mounts in the DOM.
    componentDidMount() {
        // update the state.welcome to a string
        this.setState({ welcome: 'Welcome to the Login Page!' });
    }

    render() {
        return (
            <div>
                <LoginComponent welcome={this.state.welcome}/>;
            </div>
        );
    }
}