import React from 'react';
import PropTypes from 'prop-types';
import { Well, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import phoneNumberPropType from 'phone-number-prop-type';

const SignupComponent = props => {

    const styles = {
        title:{
            color:'blue'
        },
        well: {
            margin: '4% 20%'
        },

    };
    return (
        <div>
            <div style={styles.title}>
                <Well style={styles.well}  bsSize="large">
                    <FormGroup validationState={props.validationState()}>
                        <ControlLabel> First Name</ControlLabel>
                        <FormControl
                            type="firstName"
                            value={props.firstName}
                            placeholder="First Name  Ex: John"
                            onChange={props.handleFirstNameChange}
                        />
                        <ControlLabel> Last Name</ControlLabel>
                        <FormControl
                            type="lastName"
                            value={props.lastName}
                            placeholder="Last Name  Ex: Stewart"
                            onChange={props.handleLastNameChange}
                        />
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

                    </FormGroup>
                </Well>
            </div>

        </div>

    );
};

SignupComponent.propsTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    postalCode: PropTypes.string.isRequired,
    phoneNumber: phoneNumberPropType.isRequired,
    handleFirstNameChange: PropTypes.func,
    handleLastNameChange: PropTypes.func,
    handleEmailChange: PropTypes.func,
    handlePasswordChange: PropTypes.func,
    handleAddressChange: PropTypes.func,
    handlePostalCodeChange: PropTypes.func,
    handlePhoneNumberChange: PropTypes.func,
    validationState:PropTypes.func
};

export default SignupComponent;
