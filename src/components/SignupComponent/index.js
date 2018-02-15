import React from 'react';
import PropTypes from 'prop-types';
import { Well, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import phoneNumberPropType from 'phone-number-prop-type';
import {purple_main} from "../../resources/colors";

const SignupComponent = props => {

    const styles = {
        title:{
            marginTop: 115
        },
        well: {
            margin: '4% 20%'
        },
        centerDiv: {
            // alignItems
        },
        container:{
            display:'flex',
            justifyContent:'space-between'
        }

    };
    return (
        <div>
            <div style={styles.title}>
                <h1 className="mainTitle">Sign-up to <span style={{ color: purple_main }}>Presto</span></h1>
            </div>
            <Well style={styles.well}  bsSize="large">

                <FormGroup validationState={props.validationState()}>
                    <div style={styles.container}>
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
                    </div>


                    {/*<div className={"row"}>*/}
                        {/*<div className={"col-md-6"}>*/}
                            {/**/}
                        {/*</div>*/}
                        {/*<div className={"col-md-3"}>*/}
                            {/**/}
                        {/*</div>*/}


                    {/*</div>*/}

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
