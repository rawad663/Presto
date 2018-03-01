import React from 'react';
import PropTypes from 'prop-types';
import { Glyphicon } from 'react-bootstrap';
import { Button } from 'reactstrap';

import NavBar from '../custom_components/NavBar';
import RestaurantCard from '../custom_components/RestaurantCard';



const CustomerHomeComponent = props => {

    return (
        <div>
            <NavBar fullName="Rawad Karam"/>
            <h2 style={{ margin: '40px auto' }} className="mainTitle"> Nearby Restaurants </h2>

            <div id="card-wrapper">
                <Button className="circle-button" id="dislike">
                    <Glyphicon style={{ color: 'white' }} glyph="thumbs-down" />
                </Button>

                <RestaurantCard
                    style={{ alignSelf: 'center' }}
                    restaurantName="Kral Doner"
                    phoneNumber="+90-266-862-2615"
                    postalCode="10600"
                    restaurantRating={4.6}
                />

                <Button className="circle-button" id="like">
                    <Glyphicon style={{ color: 'white' }} glyph="thumbs-up" />
                </Button>
            </div>
        </div>



    );
};

CustomerHomeComponent.propsTypes = {
    handleCustRsvClicked: PropTypes.func,
    handleSettingsClicked: PropTypes.func

};

export default CustomerHomeComponent;