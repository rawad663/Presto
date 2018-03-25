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
            restaurantName: '',
            description:'',
            errors: []
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
    handlePhoneNumberChange = value => {
        this.setState({phoneNumber: value})
    };

    handleRestaurantNameChange = e => {
        this.setState({ restaurantName: e.target.value })
    };
    handleUserTypeChange = e => {
        this.setState({userType: e.target.value})
    };

    handleDescriptionChange = e => {
        this.setState({description: e.target.value})
    };


handleSubmit = () => {
        const {
            email,
            firstName,
            lastName,
            password,
            postalCode,
            phoneNumber,
            restaurantName,
            userType,
            description,
            address

        } = this.state;

        const postData = {
            user: {
                username: email,
                email,
                first_name: firstName,
                last_name: lastName,
                password
            }
        };

        if(userType === 'restaurant') {
            postData.resto_name = restaurantName;
            postData.description = description;
            postData.postal_code = postalCode;
            postData.phone_number = phoneNumber;
            postData.address = address;
        }

        aPost(userType === 'customer' ? routes.registerCustomer : routes.registerRestaurant, postData).then(response => {
            const { status, data } = response;

            if (status === 201) {
                // store user to localStorage for easy access
                localStorage.loggedInUser = JSON.stringify({ ...data });

                if (userType === 'customer') {
                    this.props.history.push('/customer');
                } else if (userType === 'restaurant') {
                    this.props.history.push('/restaurant');
                }
            }
        }).catch(err => {
            if (err.response !== null && err.response !== undefined) {
                const errors = Object.keys(err.response.data).map(key => ({key, value: err.response.data[key]}));
                this.setState({errors});
            }
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
            restaurantName,
            description,
            errors
        } = this.state;

        return(
          <div className="fade-in">
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
                description = {description}
                profileEdit = {false}
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
                handleDescriptionChange = {this.handleDescriptionChange}
                errors = {errors}
              />;
          </div>
        );
    }
}
