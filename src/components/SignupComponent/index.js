import React from 'react';
import PropTypes from 'prop-types';
import { Well } from 'react-bootstrap';
import phoneNumberPropType from 'phone-number-prop-type';
import {purple_main} from "../../resources/colors";
import { Button, FormGroup, Label, Input, Row, Col, FormFeedback } from 'reactstrap';
import ReactPhoneInput from "react-phone-input-2";
import { Alert } from 'react-bootstrap';

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
        },
        alerts: {
            margin: '4px auto',
        }
    };

    const renderAlerts = errors => errors.map(error =>
        <Alert style={styles.alerts} key={error.key} bsStyle="danger">{`"${error.key}": ${error.value}`}</Alert>
    );

    return (
        <div>
            <div style={styles.title}>
            {props.profileEdit
                ? <h1 className="mainTitle">Edit <span style={{ color: purple_main }}>Profile</span></h1>
                : <div>
                        <h1 className="mainTitle">Sign Up to <span style={{ color: purple_main }}>Presto</span></h1>
                        <h3 className="mainTitle">Attention foodies: try not to stay up all night on this!</h3>
                    </div>
                }
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
                            <FormFeedback>First name must be more than 3 letters</FormFeedback>
                        </Col>
                        <Col sm={{ size: 6, offset: 1 }}>
                            <Label for="lastName"> Last Name</Label>
                            <Input
                                type="text"
                                name="lastName"
                                value={props.lastName}
                                placeholder="Ex: Bryant"
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
                                disabled={props.profileEdit}
                                onChange={props.handleEmailChange}
                            />
                        </Col>
        
                        <Col sm={{ size: 6, offset: 1 }}>
                            <FormGroup tag="fieldset" column={"true"}>
                                <Label for="userType"> User Type </Label>
                                <Row >
                                    <Col sm={{ size: 4, offset: 1 }}>
                                        <Label check>
                                            <Input type="radio" name="userType" value="customer"
                                                   checked = {props.userType==='customer'}
                                                   onChange={props.handleUserTypeChange}/>{' '}
                                            Customer
                                        </Label>
                                    </Col>
                                    <Col sm={{ size: 4, offset: 1 }}>
                                        <Label check>
                                            <Input type="radio" name="userType" value="restaurant"
                                                   checked = {props.userType==='restaurant'}
                                                   onChange={props.handleUserTypeChange}/>{' '}
                                            Restaurant
                                        </Label>
                                    </Col>
                                </Row>
                            </FormGroup>
                        </Col>
                    </Row>


                    {props.userType === 'restaurant'
                    &&

                    <div style={styles.row}>

                        <Col style={styles.row}>
                            <Label for="restaurantName">Restaurant Name</Label>
                            <Input
                                type="text"
                                name="restaurantName"
                                value={props.restaurantName}
                                placeholder="Ex: Bob's Burger"
                                onChange={props.handleRestaurantNameChange}
                            />
                        </Col>

                        <Col style={styles.row}>
                            <Label for = "Description">  Description </Label>

                            <Input
                                type = "textarea"
                                name = "description"
                                value = {props.description}
                                placeholder = "Tell me about you restaurant"
                                onChange = {props.handleDescriptionChange}
                                rows="4"
                                cols="100"
                                multiline="true"
                                style={{resize: "none"}}
                            />
                        </Col>

                        <div style={{ ...styles.row, display: 'flex', justifyContent: 'space-between'}}>
                            <div  style={styles.row}>
                                <Label for="PhoneNumber">Phone Number</Label>
                                <ReactPhoneInput
                                    name="phoneNumber"
                                    value={props.phoneNumber}
                                    onChange={props.handlePhoneNumberChange}
                                    defaultCountry="ca"

                                />
                            </div>
                            <div style={{ marginLeft: 15 }}>
                                <Label for="profilePicture">Profile Picture</Label>
                                <Input onChange={props.handleProfilePic} type="file" name="profilePicture"/>
                            </div>
                        </div>

                        <Row style={styles.row}>
                            <Col sm={{size:6, offset :1}}>
                                <Label for="Address">Address</Label>
                                <Input
                                    type="text"
                                    name="address"
                                    value={props.address}
                                    placeholder="Ex: 3454 Park Ave"
                                    onChange={props.handleAddressChange}
                                />
                            </Col>

                            <Col sm={{size:6, offset :1}} style={styles.row}>

                                <Label for="PostalCode">Postal Code</Label>
                                <Input
                                    type="text"
                                    name="postalCode"
                                    value={props.postalCode}
                                    placeholder="Ex: H2X2E2"
                                    onChange={props.handlePostalCodeChange}
                                />
                            </Col>
                        </Row>
                    </div>}

                    <Row style={styles.row}>
                        <Col sm={{ size: 6, offset: 1 }}>
                            <Label for="password">Password</Label>
                            <Input
                                type="password"
                                name="password"
                                value={props.password}
                                placeholder="********"
                                disabled={props.profileEdit}
                                onChange={props.handlePasswordChange}
                            />
                        </Col>

                        <Col sm={{ size: 6, offset: 1 }}>
                            <Label for="confirmPassword">Confirm Password</Label>
                            <Input
                                type="password"
                                name="confirmPassword"
                                value={props.password2}
                                disabled={props.profileEdit}
                                placeholder="********"
                                onChange={props.handlePassword2Change}
                            />
                        </Col>
                    </Row>

                    <div style={{ display: 'flex' }}>
                    {props.profileEdit
                        ? <Button
                            onClick={props.handleSubmit}
                            style={{ ...styles.signUp, width: 150 }}
                            type="submit"
                            >
                                Submit Changes
                        </Button>
                        : <Button
                            onClick={props.handleSubmit}
                            style={{ ...styles.signUp, width: 150 }}
                            type="submit"
                            >
                                Sign Up
                        </Button>
                    }
                        <Button
                            onClick={props.handleCancel}
                            style={{ marginLeft: 8 }}
                        >
                            Cancel
                        </Button>
                    </div>
                </FormGroup>
                {props.errors.length > 0
                    && <div>
                        <p style={{ color: 'red', marginTop: 4 }}> Cannot process request due to errors: </p>
                        {renderAlerts(props.errors)}
                    </div>}
            </Well>
        </div>
    );
};

SignupComponent.propsTypes = {
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    password2: PropTypes.string.isRequired,
    userType: PropTypes.string.isRequired,
    profileEdit: PropTypes.bool.isRequired,

    address: PropTypes.string.isRequired,
    postalCode: PropTypes.string.isRequired,
    phoneNumber: phoneNumberPropType.isRequired,
    description: PropTypes.string.isRequired,
    restaurantName: PropTypes.string.isRequired,

    handleAddressChange: PropTypes.func,
    handlePostalCodeChange: PropTypes.func,
    handlePhoneNumberChange: PropTypes.func,
    handleDescriptionChange: PropTypes.func,
    handleRestaurantNameChange: PropTypes.func,
    handleFirstNameChange: PropTypes.func,
    handleLastNameChange: PropTypes.func,
    handleEmailChange: PropTypes.func,
    handlePasswordChange: PropTypes.func,
    handleSubmit: PropTypes.func,
    handleCancel: PropTypes.func,
    handleUserTypeChange: PropTypes.func,
    handleProfilePic: PropTypes.func,
    validationState:PropTypes.func,

    errors: PropTypes.array
};
SignupComponent.defaultProps = {
    profileEdit: false
};

export default SignupComponent;
