import React from 'react';
import { Button } from 'reactstrap';
import { Glyphicon } from 'react-bootstrap'
import RestaurantCard from '../custom_components/RestaurantCard';

const Belt = props => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>

            <RestaurantCard
                id="left-belt-item"
                style={{ margin: 'auto 10px', maxWidth: '26%', opacity: 0.2 }}
                restaurantName="Bob's Burger"
                address="Montreal, Canada"
                phoneNumber="514-577 5424"
                postalCode="M3M 3M3"
            />

            <div>
                <RestaurantCard
                    id="middle-belt-item"
                    style={{ margin: 'auto 10px' }}
                    restaurantName="Samir's Falafels"
                    address="Susurluk, Balikesir"
                    phoneNumber="+90-266-862-2615"
                    postalCode="10600"
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

            <RestaurantCard
                id="right-belt-item"
                style={{ margin: 'auto 10px', maxWidth: '26%', opacity: 0.2 }}
                restaurantName="Helena's Chicken"
                address="Montreal, Canada"
                phoneNumber="514-122 0298"
                postalCode="M1L 0K3"
            />
        </div>
    );
};

export default Belt;