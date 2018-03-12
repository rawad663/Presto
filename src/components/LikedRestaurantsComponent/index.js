import React from 'react';
import PropTypes from 'prop-types';

import NavBar from '../custom_components/NavBar';
import SideNav from '../custom_components/SideNav';

const LikedRestaurantsComponent = props => {

    const renderLikedRestaurants = restos => restos.map(resto => <li><h3>{resto}</h3></li>);
    const items = [
        { name: 'Home', route: '/customer'},
        { name: 'Liked Restaurants', route: '/customer/liked'},
        { name: 'Reservations', route: '/customer/reservations'},
        { name: 'Profile', route: '/customer/profile'}
    ];

    return (
        <div>
            <NavBar
                button1="Liked Restaurants"
                button2="Reservations"
                button2Click={props.handleCustRsvClicked}
                fullName={'Fustat Fargin'}
            />
            <SideNav
                items={items}
                history={props.history}
                route={props.route}
            />

            <div style={{ marginLeft: 200, marginTop: 70 }}>
                <ul>
                {renderLikedRestaurants(props.restaurants)}
                </ul>
            </div>
        </div>
    )
};

LikedRestaurantsComponent.propTypes = {
    history: PropTypes.object,
    restaurants: PropTypes.array
};

export default LikedRestaurantsComponent;