import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProfileComponent from '../../components/ProfileComponent';

export default class ProfileContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {
                first_name: 'Example',
                last_name: 'Name',
                email: 'example@example.com',
                username: 'example@example.com'
            },
            address: null,
            resto_name: null,
            description: null,
            phone_number: null,
            postal_code: null
        }
    }

    componentDidMount() {
        const loggedInUser = localStorage.loggedInUser !== undefined && JSON.parse(localStorage.loggedInUser);
        console.log(loggedInUser);

        this.setState({ ...loggedInUser });
    }

    render() {
        return (
            <ProfileComponent route={this.props.location.pathname} loggedInUser={this.state} />
        );
    }
}