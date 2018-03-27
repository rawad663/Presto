import React from 'react';
import PropTypes from 'prop-types';

import NavBar from '../custom_components/NavBar';
import SideNav from '../custom_components/SideNav';
import RestaurantCard from '../custom_components/RestaurantCard';
import {purple_main} from "../../resources/colors";

const LikedRestaurantsComponent = props => {
    const styles = {
        reservations: {
            fontWeight: 'lighter',
            color: purple_main,
            margin: '80px 30px 0 90px'
        },
        likedRestaurants: {
            margin: '8px auto'
        }
    };

    const renderLikedRestaurants = restos => restos.map(resto => (
        <RestaurantCard
            id="middle-belt-item"
            className={props.animation ? 'animateLeft' : null}
            style={{ margin: 'auto 10px', width: 390}}
            restaurantName={resto.resto_name}
            phoneNumber={resto.phone_number}
            postalCode={resto.postal_code}
            address={resto.address}
            email={resto.user.email}
            restaurantRating={2.5}
            imgUrl={'https://presto-core.herokuapp.com' + resto.photo}
            description={resto.description}
            likedRestos={true}
        />
    ));
    const items = [
        { name: 'Home', route: '/customer'},
        { name: 'Liked Restaurants', route: '/customer/liked'},
        { name: 'Reservations', route: '/customer/reservations'}
    ];

    return (
        <div>
            <NavBar />
            <SideNav items={items} route={props.route} />

            <div style={{ marginLeft: 200 }}>
                <div>
                    <h1 style={styles.reservations}>Liked Restaurants</h1>
                </div>
                <div style={{ maxWidth: '80%', margin: 50, display: 'flex', flexWrap: 'wrap' }}>
                {props.restaurants !== undefined && props.restaurants.length > 0
                ? renderLikedRestaurants(props.restaurants)
                : <p style={{ color: '#616161', fontSize: 14 }}>* No Liked Restaurants found! Try checking a few out.</p>}
                </div>
            </div>
        </div>
    )
};

LikedRestaurantsComponent.propTypes = {
    route: PropTypes.string,
    restaurants: PropTypes.array,
    loggedInUser: PropTypes.object
};

export default LikedRestaurantsComponent;
