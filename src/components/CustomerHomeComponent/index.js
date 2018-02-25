import React from 'react';
import RestaurantCard from '../custom_components/RestaurantCard';
import {purple_main} from "../../resources/colors";

const CustomerHomeComponent = props => {

    const styles = {
        title: {
            color: purple_main
        }
    };

    return (
        <div>
            <RestaurantCard restaurantName="Bob's Burger" phoneNumber="514-577 5424" postalCode="H3J0A9" />
        </div>
    );
};

CustomerHomeComponent.propsTypes = {


};

export default CustomerHomeComponent;