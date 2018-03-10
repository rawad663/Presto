import React from 'react';
import PropTypes from 'prop-types';

import SideNav from '../custom_components/SideNav';
import NavBar from '../custom_components/NavBar';
import Belt from '../custom_components/Belt';
import {purple_main} from "../../resources/colors";
import RestaurantCard from "../custom_components/RestaurantCard";
import {Button} from "reactstrap";
import {Glyphicon} from "react-bootstrap";

const CustomerHomeComponent = props => {

    const items = [
        { name: 'Home', route: '/customer' },
        { name: 'Liked Restaurants', route: '/liked-restaurants' },
        { name: 'Reservations', route: '/customer-reservations' },
        { name: 'Profile', route: '/customer-profile' }
    ];

    return (
        <div>
            <NavBar
                button1="Liked Restaurants"
                button2="Reservations"
                button2Click={props.handleCustRsvClicked}
                fullName="Rawad Karam"
            />
            <SideNav items={items} history={props.history} route={props.route} />
            <div style={{ marginLeft: 200, maxWidth: '100%' }}>
                <h1 style={{ color: purple_main, margin: '80px 90px 80px 90px', fontWeight: 'lighter' }}> Nearby Restaurants </h1>
                <Belt />
            </div>

        </div>
    );
};

CustomerHomeComponent.propsTypes = {
    handleCustRsvClicked: PropTypes.func,
    handleSettingsClicked: PropTypes.func,
    route: PropTypes.string,
    history: PropTypes.object

};

export default CustomerHomeComponent;