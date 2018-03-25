import React from 'react';
import PropTypes from 'prop-types';

// This component will not be using state, will get fed from WelcomePageContainer.
// We can write it as a stateless function (no class)
const WelcomePageComponent = props => {

    return (
        <div id="welcome-wrapper">

            <div style={{ display: 'flex', justifyContent: 'center'}}>
                <button className="front-button" onClick={props.handleLogin}>Log In</button>
                <button className="front-button" onClick={props.handleSignUp}>Sign Up</button>
            </div>

        </div>
    );
};

WelcomePageComponent.propTypes = {
    handleLogin: PropTypes.func,
    handleSignUp: PropTypes.func
};

export default WelcomePageComponent;
