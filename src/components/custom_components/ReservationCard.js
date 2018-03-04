import React from 'react';
import PropTypes from 'prop-types';

const ReservationCard = props => {
    return (
        <div style={props.style}>

        </div>
    );
};

ReservationCard.propTypes = {
    style: PropTypes.object
};

ReservationCard.defaultProps = {
    style: {
        width: 200,
        height: 50,
        backgroundColor: 'red'
    }
};

export default ReservationCard;
