import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import RestaurantCard from '../custom_components/RestaurantCard';
import ThumbsUp from 'react-icons/lib/fa/thumbs-up';
import ThumbsDown from 'react-icons/lib/fa/thumbs-down';

const Belt = props => {
    const renderTwoCardsEnd = (card0, card1) => (
        <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: -30, maxWidth: '70%'}}>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                <div  style={{ maxWidth: '47%', marginTop: 30, marginLeft: 20 }}>
                    <RestaurantCard
                        id="middle-belt-item"
                        style={{ width: '100%', opacity: 0.2 }}
                        restaurantName={card1.restaurantName}
                        phoneNumber={card1.phoneNumber}
                        postalCode={card1.postalCode}
                        address={card1.address}
                        email={card1.email}
                        restaurantRating={2.5}
                        imgUrl={card1.photo}
                        description={card1.description}
                    />
                </div>
                <div style={{ maxWidth: '47%', marginLeft: -60 }}>
                    <RestaurantCard
                        id="middle-belt-item"
                        style={{ width: '100%' }}
                        restaurantName={card0.restaurantName}
                        phoneNumber={card0.phoneNumber}
                        postalCode={card0.postalCode}
                        address={card0.address}
                        email={card0.email}
                        restaurantRating={2.5}
                        imgUrl={card0.photo}
                        description={card0.description}
                    />
                    <div style={{ display: 'flex', margin: 'auto', justifyContent: 'space-around' }}>
                        <Button onClick={() => props.handleDislike(card0.id)} className="circle-button" id="dislike">
                            <ThumbsDown style={{ fontSize: 20, color: '#FF5252' }} />
                        </Button>
                        <Button onClick={() => props.handleLike(card0.id)} className="circle-button" id="like">
                            <ThumbsUp style={{ fontSize: 20, color: '#00BFA5' }} />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderTwoCardsStart = (card0, card1) => {
        return (
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: -30, maxWidth: '70%'}}>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                    <div style={{ maxWidth: '47%', marginRight: -80 }}>
                        <RestaurantCard
                            id="middle-belt-item"
                            style={{ width: '100%' }}
                            restaurantName={card0.restaurantName}
                            phoneNumber={card0.phoneNumber}
                            postalCode={card0.postalCode}
                            address={card0.address}
                            email={card0.email}
                            restaurantRating={2.5}
                            imgUrl={card0.photo}
                            description={card0.description}
                        />
                        <div style={{ display: 'flex', margin: 'auto', justifyContent: 'space-around' }}>
                            <Button onClick={() => props.handleDislike(card0.id)} className="circle-button" id="dislike">
                                <ThumbsDown style={{ fontSize: 20, color: '#FF5252' }} />
                            </Button>
                            <Button onClick={() => props.handleLike(card0.id)} className="circle-button" id="like">
                                <ThumbsUp style={{ fontSize: 20, color: '#00BFA5' }} />
                            </Button>
                        </div>
                    </div>
                    <div  style={{ maxWidth: '47%', marginTop: 30, marginRight: 50 }}>
                        <RestaurantCard
                            id="middle-belt-item"
                            style={{ width: '100%', opacity: 0.2 }}
                            restaurantName={card1.restaurantName}
                            phoneNumber={card1.phoneNumber}
                            postalCode={card1.postalCode}
                            address={card1.address}
                            email={card1.email}
                            restaurantRating={2.5}
                            imgUrl={card1.photo}
                            description={card1.description}
                        />
                    </div>
                </div>
            </div>
        );
    };

    const renderThreeCards = (card0, card1, card2) => (
        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: -30 }}>
            <RestaurantCard
                id="left-belt-item"
                style={{ margin: 'auto 10px', maxWidth: '31%', opacity: 0.2 }}
                restaurantName={card0.restaurantName}
                phoneNumber={card0.phoneNumber}
                postalCode={card0.postalCode}
                address={card0.address}
                email={card0.email}
                description={card0.description}
                restaurantRating={4.5}
                imgUrl={card0.photo}
            />

            <div style={{maxWidth:'31%'}}>
                <RestaurantCard
                    id="middle-belt-item"
                    style={{ margin: 'auto 10px'}}
                    restaurantName={card1.restaurantName}
                    phoneNumber={card1.phoneNumber}
                    postalCode={card1.postalCode}
                    address={card1.address}
                    email={card1.email}
                    restaurantRating={2.5}
                    imgUrl={card1.photo}
                    description={card1.description}
                />
                <div style={{ display: 'flex', margin: 'auto', justifyContent: 'space-around' }}>
                    <Button onClick={() => props.handleDislike(card1.id)} className="circle-button" id="dislike">
                        <ThumbsDown style={{ fontSize: 20, color: '#FF5252' }} />
                    </Button>
                    <Button onClick={() => props.handleLike(card1.id)} className="circle-button" id="like">
                        <ThumbsUp style={{ fontSize: 20, color: '#00BFA5' }} />
                    </Button>
                </div>
            </div>
                <RestaurantCard
                    id="right-belt-item"
                    style={{ margin: 'auto 10px', maxWidth: '31%', opacity: 0.2 }}
                    restaurantName={card2.restaurantName}
                    phoneNumber={card2.phoneNumber}
                    postalCode={card2.postalCode}
                    address={card2.address}
                    email={card2.email}
                    restaurantRating={3.7}
                    imgUrl={card2.photo}
                    description={card2.description}
                />
        </div>
    );

    return (
        <div style={{ display: 'flex', justifyContent: (props.items.length === 2 && props.index > 0) || props.items.length === 0 ? 'flex-start' : 'flex-end' }}>

            {props.items[0] === undefined || props.items.length === 0
                ? <p style={{ color: '#616161', fontSize: 14, marginLeft: 60 }}>* No restaurants found! Looks like you're done for the day.</p>
                : props.items.length === 2 && props.index > 0
                    ? renderTwoCardsEnd(props.items[1], props.items[0])
                    : props.items.length === 2 && props.index === 0
                        ? renderTwoCardsStart(props.items[0], props.items[1])
                        : renderThreeCards(props.items[0], props.items[1], props.items[2])
            }

        </div>
    );
};

Belt.propTypes = {
    handleLike: PropTypes.func,
    handleDislike: PropTypes.func,
    items: PropTypes.array,
    index: PropTypes.number
};

export default Belt;
