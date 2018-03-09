import React from 'react';
import PropTypes from 'prop-types';

import SideNav from '../custom_components/SideNav';
import NavBar from '../custom_components/NavBar';
import Belt from '../custom_components/Belt';
import {purple_main} from "../../resources/colors";

const CustomerHomeComponent = props => {

    const items = [
        { name: 'Home', route: '/customer' },
        { name: 'Liked Restaurants', route: '/liked-restaurants' },
        { name: 'Reservations', route: '/customer-reservations' },
        { name: 'Profile', route: '/customer-profile' }
    ];

    const beltItems = [
        {
            restaurantName: 'Resto1',
            address: 'restoaddress1',
            postalCode: 'restocode1',
            phoneNumber: '5140000000'
        },
        {
            restaurantName: 'Resto2',
            address: 'restoaddress2',
            postalCode: 'restocode2',
            phoneNumber: '5140000000'
        },
        {
            restaurantName: 'Resto3',
            address: 'restoaddress3',
            postalCode: 'restocode3',
            phoneNumber: '5140000000'
        }
    ];

    const filterRestaurants = list => {
        return list.map(restaurant => {
            return {
                restaurantName: restaurant.name,
                address: restaurant.address,
                postalCode: restaurant.postalCode,
                phoneNumber: restaurant.phoneNumber
            }
        });
    };

    const selectRestaurantCards = (list, index) => {
        console.log(index);
        return [ list[index - 1], list[index], list[index + 1] ];
    };

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
                <Belt
                    handleLike={props.handleLike}
                    items={selectRestaurantCards(filterRestaurants(props.restaurantList), props.index)}
                />
            </div>
        </div>
    );
};

CustomerHomeComponent.propsTypes = {
    handleCustRsvClicked: PropTypes.func,
    handleSettingsClicked: PropTypes.func,
    route: PropTypes.string,
    history: PropTypes.object,
    restaurantList: PropTypes.array,
    handleLike: PropTypes.func
};

export default CustomerHomeComponent;