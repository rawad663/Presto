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


handleDescriptionChange = e => {
    this.setState({userType: e.target.value})
};


handleSubmit = () => {
        const { email, firstName, lastName, password, postalCode, phoneNumber, restaurantName, userType } = this.state;

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
            postData.description = 'Hey, welcome to our restaurant!';
            postData.postal_code = 'h3k0l1';
            postData.phone_number = '5145776554';
        }

        console.log(postData);

        aPost(userType === 'customer' ? routes.registerCustomer : routes.registerRestaurant, postData).then(response => {
            const { status, data } = response;

            if (status === 201) {
                // store user to localStorage for easy access
                localStorage.loggedInUser = JSON.stringify(data);

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
              />;
          </div>
        );
    }
}
