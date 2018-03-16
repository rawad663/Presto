import React from 'react';
import PropTypes from 'prop-types';

import SideNav from '../custom_components/SideNav';
import NavBar from '../custom_components/NavBar';
import Belt from '../custom_components/Belt';
import {purple_main} from "../../resources/colors";

const CustomerHomeComponent = props => {

    const items = [
        { name: 'Home', route: '/customer' },
        { name: 'Liked Restaurants', route: '/customer/liked' },
        { name: 'Reservations', route: '/customer/reservations' },
        { name: 'Profile', route: '/customer/profile' }
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
        const buildArray = () => {
            if (index === 0) {
                return [ list[index], list[index + 1] ]
            } else if ( index === list.length - 2 || index === list.length - 1) {
                return [ list[index] ]
            } else if (index > list.length - 1) {
                return [];
            }

            return [ list[index - 1], list[index], list[index + 1] ];
        };

        return buildArray().filter(item => item !== null);
    };

    return (
        <div>
            <NavBar
                button1="Liked Restaurants"
                button2="Reservations"
                button2Click={props.handleCustRsvClicked}
                fullName={props.loggedInUser !== null
                    ? `${props.loggedInUser.user.first_name} ${props.loggedInUser.user.last_name}`
                    : 'Fustat Fargin'}
            />

            <SideNav items={items} history={props.history} route={props.route} />

            <div style={{ marginLeft: 200, maxWidth: '100%' }}>
                <h1 style={{ color: purple_main, margin: '80px 90px 80px 90px', fontWeight: 'lighter' }}> Nearby Restaurants </h1>
                <Belt
                    handleLike={props.handleLike}
                    handleDislike={props.handleDislike}
                    items={selectRestaurantCards(filterRestaurants(props.restaurantList), props.index)}
                    animation={props.animation}
                />
            </div>

        </div>
    );
};

CustomerHomeComponent.propsTypes = {
    loggedInUser: PropTypes.object,
    handleCustRsvClicked: PropTypes.func,
    route: PropTypes.string,
    history: PropTypes.object,
    restaurantList: PropTypes.array,
    handleLike: PropTypes.func,
    handleDislike: PropTypes.func
};

export default CustomerHomeComponent;