import React, { Component } from 'react';
import WelcomePageComponent from '../../components/WelcomePageComponent';
import {aPost, routes} from "../../api/api";

export default class WelcomePageContainer extends Component {

    handleLogin = () => {
        this.props.history.push('/login');
    };

    handleSignUp = () => {
        this.props.history.push('/signup');
    };

    render() {
        console.log(this.props);
        return(
            <div>
                <WelcomePageComponent
                    handleLogin={this.handleLogin}
                    handleSignUp={this.handleSignUp}
                />
            </div>
        );
    }
}