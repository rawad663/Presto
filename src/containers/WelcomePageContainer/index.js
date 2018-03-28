import React, { Component } from 'react';
import WelcomePageComponent from '../../components/WelcomePageComponent';

export default class WelcomePageContainer extends Component {

    handleLogin = () => {
        this.props.history.push('/login');
    };

    handleSignUp = () => {
        this.props.history.push('/signup');
    };

    render() {
        return(
            <div className="fade-in">
                <WelcomePageComponent
                    handleLogin={this.handleLogin}
                    handleSignUp={this.handleSignUp}
                />
            </div>
        );
    }
}
