import React from 'react';
import PropTypes from 'prop-types';
import { Well, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import phoneNumberPropType from 'phone-number-prop-type';
import {purple_main} from "../../resources/colors";
import {Container, Row, Col} from 'reactstrap'


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
        row: {
            marginBottom: 10
        }

    };
    return (
        <div>
            <div style={styles.title}>
                <h1 className="mainTitle">Sign-up to <span style={{ color: purple_main }}>Presto</span></h1>
            </div>
            <Well style={styles.well}  bsSize="large">

                <FormGroup validationState={props.validationState()}>

                    <Row style={styles.row}>
                        <Col sm={{ size: 6, offset: 1 }}>
                            <ControlLabel> First Name</ControlLabel>
                            <FormControl
                                type="firstName"
                                value={props.firstName}
                                placeholder="Example: LeBron"
                                onChange={props.handleFirstNameChange}
                            />
                        </Col>
                        <Col sm={{ size: 6, offset: 1 }}>
                            <ControlLabel> Last Name</ControlLabel>
                            <FormControl
                                type="lastName"
                                value={props.lastName}
                                placeholder="Example: Bryant"
                                onChange={props.handleLastNameChange}
                            />
                        </Col>
                    </Row>

                    <ControlLabel> Email</ControlLabel>
                    <FormControl
                        type="email"
                        value={props.email}
                        placeholder="example@domain.com"
                        onChange={props.handleEmailChange}
                    />
                    <Row style={styles.row}>
                        <Col sm={{ size: 6, offset: 1 }}>
                            <ControlLabel style={{ marginTop: 16}}>New Password</ControlLabel>
                            <FormControl
                                type="password"
                                value={props.password}
                                placeholder="********"
                                onChange={props.handlePasswordChange}
                            />
                        </Col>
                        <Col sm={{ size: 6, offset: 1 }}>
                            <ControlLabel style={{ marginTop: 16}}>Confirm Password</ControlLabel>
                            <FormControl
                                type="password2"
                                value={props.password2}
                                placeholder="********"
                                onChange={props.handlePasswordChange}
                            />
                        </Col>
                    </Row>



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
    password2: PropTypes.string.isRequired,
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
