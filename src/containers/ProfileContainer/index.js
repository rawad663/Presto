import React, { Component } from 'react';

import ProfileComponent from '../../components/ProfileComponent';

export default class ProfileContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            account: {
                user: {
                    first_name: 'Example',
                    last_name: 'Name',
                    email: 'example@example.com',
                    username: 'example@example.com',
                    is_resto: false
                },
                address: null,
                resto_name: null,
                description: null,
                phone_number: null,
                postal_code: null
            }
        }
    }

    componentDidMount() {
        const loggedInUser = localStorage.loggedInUser !== undefined && JSON.parse(localStorage.loggedInUser);
        if (localStorage.loggedInUser !== undefined) {
            this.setState({ account: { ...loggedInUser } })
        }
    }

    handeEditProfile = () => {
        this.props.history.push(this.state.account.user.is_resto ? '/restaurant/edit' : '/customer-profile');
    };

    render() {
        return (
            <ProfileComponent
                handleEditProfile={this.handeEditProfile}
                toogle={this.toggle}
                tooltipOpen={this.state.tooltipOpen}
                route={this.props.location.pathname}
                loggedInUser={this.state.account}
            />
        );
    }
}