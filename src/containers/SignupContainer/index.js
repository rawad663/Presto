import React, {Component} from 'react';
import SignupComponent from '../../components/SignupComponent';
import PropTypes from "prop-types";

export default class SignupContainer extends Component{

    constructor(props){
        super(props);

        this.state = {
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            address:'',
            postalCode:'',
            phoneNumber:''
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
    handleAddressChange = e => {
        this.setState({address: e.target.value})
    };
    handlePostalCodeChange = e => {
        this.setState({postalCode: e.target.value})
    };
    handlePhoneNumberChange = e => {
        this.setState({phoneNumber: e.target.value})
    };

    //TODO
    getValidationState = () => {
        return null;
    };


    render(){
        console.log(this.props)
        return(
          <div>
              <SignupComponent
                firstName = {this.state.firstName}
                lastName = {this.state.lastName}
                email = {this.state.email}
                password = {this.state.password}
                address = {this.state.email}
                postalCode = {this.state.postalCode}
                phoneNumber = {this.state.phoneNumber}
                handleFirstNameChange= {this.handleFirstNameChange}
                handleLastNameChange= {this.handleLastNameChange}
                handleEmailChange= {this.handleEmailChange}
                handlePasswordChange= {this.handlePasswordChange}
                handleAddressChange= {this.handleAddressChange}
                handlePostalCodeChange= {this.handlePostalCodeChange}
                handlePhoneNumberChange= {this.handlePhoneNumberChange}
                validationState={this.getValidationState}

              />;
          </div>
        );
    }

}