import React from 'react';
import PropTypes from 'prop-types';
import buffet from '../../resources/images/bar-buffet.jpg';
import { purple_main } from '../../resources/colors';

const RestaurantCard = props => {
    const styles = {
        text: {
            marginLeft: 5,
        },
        img: {
            borderRadius: 3,
            minWidth: 150,
            maxWidth: 400
        },
        infoBlock: {
            paddingTop: 7,
            paddingBottom: 7
        }
    };

    return (
        <div className="card">
            <img style={styles.img} src={buffet} />
            <h3 style={{ ...styles.text, color: purple_main, fontWeight: 60 }}>{props.restaurantName}</h3>
            <div style={styles.infoBlock}>
                <p className="card-info" style={styles.text}>{props.address}, {props.postalCode}</p>
                <p className="card-info" style={styles.text}>{props.phoneNumber}</p>
                <p className="card-info" style={styles.text}>{props.email}</p>
            </div>
        </div>
    )
};

RestaurantCard.propTypes = {
    restaurantName: PropTypes.string,
    address: PropTypes.string,
    postalCode: PropTypes.string,
    phoneNumber: PropTypes.string,
    email: PropTypes.string
};

RestaurantCard.defaultProps = {
    restaurantName: 'Restaurant Name',
    address: '377 Address Street',
    phoneNumber: '514-452 2345',
    postalCode: 'H3K4L1',
    email: 'example@example.com'
};

export default RestaurantCard;