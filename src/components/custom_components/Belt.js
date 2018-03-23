import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { Glyphicon } from 'react-bootstrap'
import RestaurantCard from '../custom_components/RestaurantCard';
import turkishFood from '../../resources/images/turkish-food.jpg'
import mexicanFood from '../../resources/images/mexican-food.jpg'
import chineseFood from '../../resources/images/chinese-food.jpg'

const Belt = props => {

    const renderOneCard = (card1) => {
        return (
            <div style={{maxWidth:'30%'}}>
                <RestaurantCard
                    id="middle-belt-item"
                    className={props.animation ? 'animateLeft' : null}
                    style={{ margin: 'auto 10px'}}
                    restaurantName={card1.restaurantName}
                    phoneNumber={card1.phoneNumber}
                    postalCode={card1.postalCode}
                    address={card1.address}
                    email={card1.email}
                    restaurantRating={2.5}
                    imgUrl={turkishFood}
                />
                <div style={{ display: 'flex', margin: 'auto', justifyContent: 'space-around' }}>
                    <Button onClick={props.handleDislike} className="circle-button" id="dislike">
                        <Glyphicon style={{ color: 'white' }} glyph="thumbs-down" />
                    </Button>
                    <Button onClick={props.handleLike} className="circle-button" id="like">
                        <Glyphicon style={{ color: 'white' }} glyph="thumbs-up" />
                    </Button>
                </div>
            </div>

        );
    };

    const renderThreeCards = (card0, card1, card2) => {
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
                    description={card0.description}
                    restaurantRating={4.5}
                    imgUrl={mexicanFood}
                />

                <div style={{maxWidth:'30%'}}>
                    <RestaurantCard
                        id="middle-belt-item"
                        className={props.animation ? 'animateLeft' : null}
                        style={{ margin: 'auto 10px'}}
                        restaurantName={card1.restaurantName}
                        phoneNumber={card1.phoneNumber}
                        postalCode={card1.postalCode}
                        address={card1.address}
                        email={card1.email}
                        restaurantRating={2.5}
                        imgUrl={turkishFood}
                    />
                    <div style={{ display: 'flex', margin: 'auto', justifyContent: 'space-around' }}>
                        <Button onClick={props.handleDislike} className="circle-button" id="dislike">
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

    return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>

            {props.items.length === 0
                ? <p style={{ color: '#616161', fontSize: 14 }}>* No restaurants found! Looks like you're done for the day.</p>
                : props.items.length === 1 || props.items.length === 2
                    ? renderOneCard(props.items[0])
                    : renderThreeCards(props.items[0], props.items[1], props.items[2])
            }

        </div>
    );
};

Belt.propTypes = {
    handleLike: PropTypes.func,
    handleDislike: PropTypes.func
};

export default Belt;