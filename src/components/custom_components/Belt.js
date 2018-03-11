import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { Glyphicon } from 'react-bootstrap'
import RestaurantCard from '../custom_components/RestaurantCard';
import turkishFood from '../../resources/images/turkish-food.jpg'
import mexicanFood from '../../resources/images/mexican-food.jpg'
import chineseFood from '../../resources/images/chinese-food.jpg'

const Belt = props => {

    console.log(props.items);

    const card0 = props.items[0];
    const card1 = props.items[1];
    const card2 = props.items[2];


    return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>

            <RestaurantCard
                id="left-belt-item"
                style={{ margin: 'auto 10px', maxWidth: '26%', opacity: 0.2 }}
                restaurantName={card0.restaurantName}
                phoneNumber={card0.phoneNumber}
                postalCode={card0.postalCode}
                address={card0.address}
                email={card0.email}
                restaurantRating={4.5}
                imgUrl={mexicanFood}
            />

            <div style={{maxWidth:'30%'}}>
                <RestaurantCard
                    id="middle-belt-item"
                    className={props.animation ? 'animateLeft' : null}
                    style={{ margin: 'auto 10px' }}
                    restaurantName={card1.restaurantName}
                    phoneNumber={card1.phoneNumber}
                    postalCode={card1.postalCode}
                    address={card1.address}
                    email={card1.email}
                    restaurantRating={2.5}
                    imgUrl={turkishFood}
                />
                <div style={{ display: 'flex', margin: 'auto', justifyContent: 'space-around' }}>
                    <Button className="circle-button" id="dislike">
                        <Glyphicon style={{ color: 'white' }} glyph="thumbs-down" />
                    </Button>
                    <Button onClick={props.handleLike} className="circle-button" id="like">
                        <Glyphicon style={{ color: 'white' }} glyph="thumbs-up" />
                    </Button>
                </div>
            </div>

            <RestaurantCard
                id="right-belt-item"
                style={{ margin: 'auto 10px', maxWidth: '26%', opacity: 0.2, flex:1 }}
                restaurantName={card2.restaurantName}
                phoneNumber={card2.phoneNumber}
                postalCode={card2.postalCode}
                address={card2.address}
                email={card2.email}
                restaurantRating={3.7}
                imgUrl={chineseFood}
            />
        </div>
    );
};

Belt.propTypes = {
    handleLike: PropTypes.func
};

export default Belt;