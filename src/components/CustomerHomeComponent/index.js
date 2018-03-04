import React from 'react';
import PropTypes from 'prop-types';
import { Glyphicon } from 'react-bootstrap';
import { Button } from 'reactstrap';

import SideNav from '../custom_components/SideNav';
import NavBar from '../custom_components/NavBar';
import RestaurantCard from '../custom_components/RestaurantCard';

const CustomerHomeComponent = props => {

    const items = [
        { name: 'Home', route: '/customer' },
        { name: 'Liked Restaurants', route: '/liked-restaurants' },
        { name: 'Reservations', route: '/customer-reservations' },
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

            <div style={{ marginLeft: 200 }}>
                <h2 style={{ margin: '80px auto' }} className="mainTitle"> Nearby Restaurants </h2>
                <div id="card-wrapper">
                    <Button className="circle-button" id="dislike">
                        <Glyphicon style={{ color: 'white' }} glyph="thumbs-down" />
                    </Button>

                    <RestaurantCard
                        style={{ alignSelf: 'center' }}
                        restaurantName="Bob's Burger"
                        phoneNumber="514-577 5424"
                        postalCode="H3J0A9"
                    />

                    <Button className="circle-button" id="like">
                        <Glyphicon style={{ color: 'white' }} glyph="thumbs-up" />
                    </Button>
                </div>
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