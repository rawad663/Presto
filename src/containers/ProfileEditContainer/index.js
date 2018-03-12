import React, {Component} from 'react';
import SignupComponent from '../../components/SignupComponent';
import {routes, aPost} from "../../api/api.js";

export default class ProfileEditContainer extends Component{

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
        const { email, firstName, lastName, password, userType, restaurantName } = this.state;
        let postData = {
            username: email,
            email,
            first_name: firstName,
            last_name: lastName,
            password
        };

        if(userType === 'restaurant') {
            postData = {
                user: {
                    username: email,
                    email,
                    first_name: firstName,
                    last_name: lastName,
                    password
                },
                name: restaurantName,
                description: 'Restaurant Description'
            };
        }

        aPost(userType === 'customer' ? routes.registerCustomer : routes.registerRestaurant, postData).then(response => {
            const { status, data } = response;

            if (status === 201) {
                // store user to localStorage for easy access
                localStorage.loggedInUser = data;

                if (userType === 'customer') {
                    this.props.history.push('/customer');
                } else if (userType === 'restaurant') {
                    this.props.history.push('/restaurant');
                }
            }
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
        const {
            firstName,
            lastName,
            email,
            password,
            password2,
            address,
            postalCode,
            phoneNumber,
            userType,
            restaurantName
        } = this.state;

        return(
            <div>
                <SignupComponent
                    first_name = {firstName}
                    last_name = {lastName}
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
