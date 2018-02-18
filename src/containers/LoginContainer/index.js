import React, { Component } from 'react';
import LoginComponent from '../../components/LoginComponent';

export default class LoginContainer extends Component {

    constructor(props) {
        super(props);

        // initialize state here
        // use this.setState() outside of constructor to set the value
        this.state = {
            email: '',
            password: ''
        };
    }

    handleEmailChange = e => {
        this.setState({ email: e.target.value });
    };

    handlePasswordChange = e => {
        this.setState({ password: e.target.value });
    };

    handleLogin = () => {
        // TODO: make API call to server to login route using axios
    };

    handleSignup = () => {
        this.props.history.push('/signup');
    };

    render() {
        return (
            <div>
                <LoginComponent
                    email={this.state.email}
                    password={this.state.password}
                    handleEmailChange={this.handleEmailChange}
                    handlePasswordChange={this.handlePasswordChange}
                    handleLogin={this.handleLogin}
                    handleSignup={this.handleSignup}
                    validationState={this.getValidationState}
                />;
            </div>
        );
    }
}