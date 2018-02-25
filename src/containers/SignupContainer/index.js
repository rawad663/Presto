import React, {Component} from 'react';
import SignupComponent from '../../components/SignupComponent';
import {routes, aPost} from "../../api/api.js";

export default class SignupContainer extends Component{

    constructor(props){
        super(props);

        this.state = {
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            password2:'',
            address:'',
            postalCode:'',
            phoneNumber:'',
            userType: '',
            restaurantName: ''
        };
    }

    handleFirstNameChange = e => {
        this.setState({firstName: e.target.value})
    };
    handleLastNameChange = e => {
        this.setState({lastName: e.target.value})
    };
    handleEmailChange = e => {
        this.setState({email:e.target.value})
    };
    handlePasswordChange = e => {
        this.setState({password: e.target.value})
    };
    handlePassword2Change = e => {
        this.setState({password2: e.target.value})
    };
    handleAddressChange = e => {
        this.setState({address: e.target.value})
    };
    handlePostalCodeChange = e => {
        this.setState({postalCode: e.target.value})
    };
    handlePhoneNumberChange = e => {
        this.setState({phoneNumber: e.target.value})
    };
    handleRestaurantNameChange = e => {
        this.setState({ restaurantName: e.target.value })
    };
    handleUserTypeChange = e => {
        this.setState({userType: e.target.value})
    };

    handleSubmit = () => {
        const { email, firstName, lastName, password } = this.state;
        const postData = {
            username: email,
            firstName,
            lastName,
            email,
            password
        };

        aPost(routes.register, postData).then(response => {
            // store token in localStorage to be accessed from different parts of the application
            localStorage.token = response.data.token;
            // this.props.history.push('/customer')
        }).catch(err => {
            console.log(err);
        });
    };
    handleCancel = () => {
        this.props.history.push('/');
    };


    getValidationState = () => {
        //TODO
        return null;
    };

    render(){
        const { firstName, lastName, email, password, password2, address, postalCode, phoneNumber, userType, restaurantName } = this.state;

        return(
          <div>
              <SignupComponent
                firstName = {firstName}
                lastName = {lastName}
                email = {email}
                password = {password}
                password2 = {password2}
                address = {address}
                postalCode = {postalCode}
                phoneNumber = {phoneNumber}
                userType = {userType}
                restaurantName = {restaurantName}
                handleFirstNameChange= {this.handleFirstNameChange}
                handleLastNameChange= {this.handleLastNameChange}
                handleEmailChange= {this.handleEmailChange}
                handlePasswordChange= {this.handlePasswordChange}
                handlePassword2Change= {this.handlePassword2Change}
                handleAddressChange= {this.handleAddressChange}
                handlePostalCodeChange= {this.handlePostalCodeChange}
                handlePhoneNumberChange= {this.handlePhoneNumberChange}
                handleSubmit = {this.handleSubmit}
                handleCancel = {this.handleCancel}
                handleUserTypeChange = {this.handleUserTypeChange}
                validationState={this.getValidationState}
                handleRestaurantNameChange = {this.handleRestaurantNameChange}
              />;
          </div>
        );
    }
}