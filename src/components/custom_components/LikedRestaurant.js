import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { purple_main } from '../../resources/colors';

import turkishFood from '../../resources/images/turkish-food.jpg';

const LikedRestaurant = props => {
    const styles = {
        resto: {
            maxWidth: '100%',
            boxShadow: '1px 2px 2px black',
            display: 'flex',
            justifyContent: 'space-between',
            borderRadius: 5,
            backgroundColor: '#9C27B0'
        },
        img: {
            margin: 5,
            width: 45,
            height: 45,
            borderRadius: '50%',
            border: '2px solid white'
        },
        title: {
            margin: 10,
            color:'#F3E5F5',
            fontWeight: 'lighter'
        },
        reserve: {
            height: '60%',
            margin: 'auto 0',
            marginRight: 8,
            color: purple_main
        }
    };


    return (
        <div style={{ ...styles.resto, ...props.style}}>
            <div style={{ display: 'flex' }}>
                <img alt="profile-pic" style={styles.img} src={props.src} />
                <h3 style={styles.title}>{props.resto.resto_name}</h3>
            </div>
            <Button style={styles.reserve} color={'#F3E5F5'}>Reserve</Button>
        </div>
    );
};

LikedRestaurant.propTypes = {
    resto: PropTypes.object,
    style: PropTypes.object,
    src: PropTypes.any,
    handleReservation: PropTypes.func
};

LikedRestaurant.defaultProps = {
    title: 'Restaurant Name',
    style: {},
    src: turkishFood
};



export default LikedRestaurant;