import React, { Component } from 'react';

// This component will not be using state, will get fed from LoginContainer.
// We can write it as a stateless function (no class)
const LoginComponent = props => {

    return (
        <div>
            <h3>{props.welcome}</h3>
        </div>
    );
};

export default LoginComponent;