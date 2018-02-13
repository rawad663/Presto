import React from 'react';
import PropTypes from 'prop-types';
import { Well, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import { purple_main } from '../../resources/colors';

// This component will not be using state, will get fed from LoginContainer.
// We can write it as a stateless function (no class)
const LoginComponent = props => {

    // object that stores all styling objects (not required, can use CSS or inline)
    const styles = {
        well: {
            margin: '4% 20%'
        },
        title: {
            marginTop: 115
        },
        button: {
            marginTop: 16,
            width: 100,
        },
        login: {
            backgroundColor: purple_main,
            color: 'white'
        }
    };

    return (
        <div>
            <div style={styles.title}>
                <h1 className="mainTitle">Welcome to <span style={{ color: purple_main }}>Presto</span></h1>
                <h3 className="mainTitle">Sometimes, getting the date isn't the hardest part...</h3>
            </div>
            <Well style={styles.well}  bsSize="large">
                <FormGroup validationState={props.validationState()}>
                    <ControlLabel> Email</ControlLabel>
                    <FormControl
                        type="email"
                        value={props.email}
                        placeholder="Email (example@example.com)"
                        onChange={props.handleEmailChange}
                    />

                    <ControlLabel style={{ marginTop: 16}}>Password</ControlLabel>
                    <FormControl
                        type="password"
                        value={props.password}
                        placeholder="Password"
                        onChange={props.handlePasswordChange}
                    />

                    <div style={{ display: 'flex' }}>
                        <Button
                            onClick={props.handleLogin}
                            style={{ ...styles.button, ...styles.login, width: 150 }}
                            type="submit"
                        >
                            Login
                        </Button>
                        <Button
                            onClick={props.handleSignup}
                            style={{ ...styles.button, marginLeft: 8 }}
                        >
                            Sign Up
                        </Button>
                    </div>
                </FormGroup>
            </Well>
        </div>
    );
};

// specify types of this component's props.
// isRequired symbolizes a prop that has to be specified when used
LoginComponent.propTypes = {
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    handleEmailChange: PropTypes.func,
    handlePasswordChange: PropTypes.func,
    handleLogin: PropTypes.func,
    handleSignup: PropTypes.func,
    validationState: PropTypes.func
};

export default LoginComponent;
