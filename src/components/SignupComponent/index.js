import React from 'react';
import PropTypes from 'prop-types';
import { Well } from 'react-bootstrap';
import phoneNumberPropType from 'phone-number-prop-type';
import {purple_main} from "../../resources/colors";
import { Button, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { RadioGroup, RadioButton } from 'react-radio-buttons';

const SignupComponent = props => {

    const styles = {
        title:{
            marginTop: 115
        },
        well: {
            margin: '4% 20%'
        },
        row: {
            marginBottom: 10
        },
        signUp: {
            backgroundColor: purple_main,
            color:'white'
        }
    };


    return (
        <div>
            <div style={styles.title}>
                <h1 className="mainTitle">Sign-up to <span style={{ color: purple_main }}>Presto</span></h1>
            </div>

            <Well style={styles.well}  bsSize="large">
                <FormGroup>
                    <Row style={styles.row}>
                        <Col sm={{ size: 6, offset: 1 }}>
                            <Label for="firstName"> First Name</Label>
                            <Input
                                type="text"
                                name="firstName"
                                value={props.firstName}
                                placeholder="Ex: LeBron"
                                onChange={props.handleFirstNameChange}
                            />
                        </Col>
                        <Col sm={{ size: 6, offset: 1 }}>
                            <Label for="lastName"> Last Name</Label>
                            <Input
                                type="text"
                                name="lastName"
                                value={props.lastName}
                                placeholder="Example: Bryant"
                                onChange={props.handleLastNameChange}
                            />
                        </Col>
                    </Row>

                    <Row style={styles.row}>
                        <Col sm={{ size: 6, offset: 1 }}>
                            <Label for="email"> Email</Label>
                            <Input
                                type="email"
                                name="email"
                                value={props.email}
                                placeholder="example@domain.com"
                                onChange={props.handleEmailChange}
                            />
                        </Col>
                        <Col sm={{ size: 6, offset: 1 }}>
                            <Label for="postalCode"> Postal Code</Label>
                            <Input
                                type="text"
                                name="postalCode"
                                value={props.postalCode}
                                placeholder="H3A1C9"
                                onChange={props.handlePostalCodeChange}
                            />
                        </Col>
                    </Row>


                    <Row style={styles.row}>
                        <Col sm={{ size: 6, offset: 1 }}>
                            <Label for="password">Password</Label>
                            <Input
                                type="password"
                                name="password"
                                value={props.password}
                                placeholder="********"
                                onChange={props.handlePasswordChange}
                            />
                        </Col>
                        <Col sm={{ size: 6, offset: 1 }}>
                            <Label for="confirmPassword">Confirm Password</Label>
                            <Input
                                type="password"
                                name="confirmPassword"
                                value={props.password2}
                                placeholder="********"
                                onChange={props.handlePassword2Change}
                            />
                        </Col>
                    </Row>

                    <FormGroup style={{ marginTop: 20 }} check>
                        <legend>User Type</legend>
                        <Label check>
                            <Input
                                onChange={props.handleUserTypeChange}
                                checked={props.userType === 'customer'}
                                type="radio"
                                name="userType"
                                value="customer"
                            />
                            Customer
                        </Label>
                    </FormGroup>
                    <FormGroup check style={{ marginBottom: 20 }}>
                        <Label check>
                            <Input
                                onChange={props.handleUserTypeChange}
                                checked={props.userType === 'restaurant'}
                                type="radio"
                                name="userType"
                                value="restaurant"
                            />
                            Restaurant
                        </Label>
                    </FormGroup>

                    {props.userType === 'restaurant'
                        &&
                        <div style={{ margin: '15px 0'}}>
                            <Label for="confirmPassword">Restaurant Name</Label>
                            <Input
                                type="text"
                                name="restaurantName"
                                value={props.restaurantName}
                                placeholder="Ex: Bob's Burger"
                                onChange={props.handleRestaurantNameChange}
                                />
                        </div>}

                    <div style={{ display: 'flex' }}>
                        <Button
                            onClick={props.handleSubmit}
                            style={{ ...styles.button, ...styles.signUp, width: 150 }}
                            type="submit"
                        >
                            Sign Up
                        </Button>
                        <Button
                            onClick={props.handleCancel}
                            style={{ ...styles.button, marginLeft: 8 }}
                        >
                            Cancel
                        </Button>
                    </div>

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
    userType: PropTypes.string.isRequired,
    phoneNumber: phoneNumberPropType.isRequired,
    handleFirstNameChange: PropTypes.func,
    handleLastNameChange: PropTypes.func,
    handleEmailChange: PropTypes.func,
    handlePasswordChange: PropTypes.func,
    handleAddressChange: PropTypes.func,
    handlePostalCodeChange: PropTypes.func,
    handlePhoneNumberChange: PropTypes.func,
    handleSubmit: PropTypes.func,
    handleCancel: PropTypes.func,
    handleUserTypeChange: PropTypes.func,
};

export default SignupComponent;
