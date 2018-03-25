import React, { Component } from 'react';
import LikedRestaurantsComponent from '../../components/LikedRestaurantsComponent';

import { aGet, routes } from '../../api/api';

export default class LikedRestaurantsContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            restaurants: []
        }
    }

    componentDidMount() {
        if(localStorage.loggedInUser !== undefined) {
            const loggedInUser = JSON.parse(localStorage.loggedInUser);
            aGet(routes.customer(loggedInUser.user.id)).then(response => {
                this.setState({
                    restaurants: response.data.liked_restos
                });
            });
        }
    }

    render() {

        return(
            <LikedRestaurantsComponent
                route={this.props.location.pathname}
                restaurants={this.state.restaurants}
                loggedInUser={localStorage.loggedInUser !== undefined ? JSON.parse(localStorage.loggedInUser) : null}
            />
        );
    }
}
