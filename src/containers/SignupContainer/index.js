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
            userType: 'customer',
            restaurantName: '',
            description:'',
            profilePic: '',
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

    handleProfilePic = e => {
        const getBase64 = (file) => {
            return new Promise((resolve,reject) => {
                const reader = new FileReader();
                reader.onload = () => resolve(reader.result);
                reader.onerror = error => reject(error);
                reader.readAsDataURL(file);
            });
        };

        getBase64(e.target.files[0]).then(base64 => {
            this.setState({profilePic: base64})
        });
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
            address,
            profilePic
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
            postData.photo = profilePic;
        }

        aPost(userType === 'customer' ? routes.registerCustomer : routes.registerRestaurant, postData).then(response => {
            const { status, data } = response;

            if (status === 201) {
                localStorage.token = data.token;

                if (data.customer !== undefined && data.customer !== null) {
                    localStorage.loggedInUser = JSON.stringify(data.customer);
                    this.props.history.push('/customer');

                } else if (data.resto !== undefined && data.resto !== null) {
                    localStorage.loggedInUser = JSON.stringify(data.resto);
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
                handleProfilePic={this.handleProfilePic}
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
