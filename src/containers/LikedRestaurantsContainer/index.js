import React, { Component } from 'react';
import LikedRestaurantsComponent from '../../components/LikedRestaurantsComponent';

import { aGet, routes } from '../../api/api';

export default class LikedRestaurantsContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            show: false,
            restaurants: [],
            resto: ''
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

    handleClose = () => {
        this.setState({ show: false });
    };

    handleShow = id => {
        this.setState({ show: true, resto: id });
    };

    render() {

        return(
            <LikedRestaurantsComponent
                resto={this.state.resto}
                route={this.props.location.pathname}
                restaurants={this.state.restaurants}
                loggedInUser={localStorage.loggedInUser !== undefined ? JSON.parse(localStorage.loggedInUser) : null}
                show={this.state.show}
                handleShow={this.handleShow}
                handleClose={this.handleClose}
            />
        );
    }
}
