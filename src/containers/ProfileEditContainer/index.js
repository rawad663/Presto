import React, {Component} from 'react';
import SignupComponent from '../../components/SignupComponent';
import {routes, aPatch} from "../../api/api.js";

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
            restaurantName: '',
            description:'',
            errors:[]
        };

        this.props = {
            id:''
        }
    }

    componentDidMount(){
        const loggedInUser= localStorage.loggedInUser !== undefined ? JSON.parse(localStorage.loggedInUser) : null;
        var userTypeText = '';
        loggedInUser.user.is_resto ? userTypeText= 'restaurant' : userTypeText='customer';

        console.log(loggedInUser);
        console.log(this.state);
        this.setState ({firstName: loggedInUser.user.first_name,
            email:loggedInUser.user.email,
            lastName:loggedInUser.user.last_name,
            userType:userTypeText
        });
        if (loggedInUser.user.is_resto){
            this.setState({restaurantName:loggedInUser.resto_name,
                description:loggedInUser.description,
                phoneNumber:loggedInUser.phone_number,
                address:loggedInUser.address,
                postalCode:loggedInUser.postal_code
            })
        }

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
        this.setState({description: e.target.value})
    };

    // TODO: HANDLE SUBMIT HAS NOT BEEN TESTED WITH BACKEND.  NEED TO TEST TO SEE IF INFORMATION GETS CORRECTLY UPDATED
    handleSubmit = () => {
        const loggedInUser = localStorage.loggedInUser !== undefined ? JSON.parse(localStorage.loggedInUser) : null;
        const {
            firstName,
            lastName,
            postalCode,
            phoneNumber,
            restaurantName,
            userType,
            description,
            address

        } = this.state;

        const putData = {
            user: {
                first_name: firstName,
                last_name: lastName,
            }
        };

        if(userType === 'restaurant') {
            putData.resto_name = restaurantName;
            putData.description = description;
            putData.postal_code = postalCode;
            putData.phone_number = phoneNumber;
            putData.address = address;
        }
        console.log('putdata', putData.user);

        aPatch(userType === 'customer' ? routes.customer(loggedInUser.user.id) : routes.restaurant(loggedInUser.user.id), putData).then(response => {
            const { status, data } = response;

            if (status === 200) {
                localStorage.token = data.token;
                localStorage.loggedInUser = JSON.stringify(data);
                if (data.user.is_resto === false) {
                    this.props.history.push('/customer');

                } else if (data.user.is_resto === true) {
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
        this.props.history.push('/customer');
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
                    description = {description}
                    profileEdit = {true}
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
                    handleDescriptionChange = {this.handleDescriptionChange}
                    validationState={this.getValidationState}
                    handleRestaurantNameChange = {this.handleRestaurantNameChange}
                    errors = {errors}
                />;
            </div>
        );
    }
}
