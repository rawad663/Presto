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
            <div style={{ marginLeft: 200, maxWidth: '100%' }}>
                <h1 style={{ margin: '80px 30px', fontWeight: 'lighter' }}> Nearby Restaurants </h1>
                <div id="card-wrapper">
                    <RestaurantCard
                        style={{ margin: 'auto' }}
                        restaurantName="Bob's Burger"
                        phoneNumber="514-577 5424"
                        postalCode="H3J 0A9"
                    />
                    <div style={{ display: 'flex', margin: 'auto', justifyContent: 'space-around' }}>
                    <Button className="circle-button" id="dislike">
                        <Glyphicon style={{ color: 'white' }} glyph="thumbs-down" />
                    </Button>
                    <Button className="circle-button" id="like">
                        <Glyphicon style={{ color: 'white' }} glyph="thumbs-up" />
                    </Button>
                    </div>
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