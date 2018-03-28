import React from 'react';
import PropTypes from 'prop-types';
import {purple_main} from "../../resources/colors";
import incognito from '../../resources/images/incognito.png';

const ReservationCard = props => {
    const styles = {
        card : {
            width: 450,
            backgroundColor: 'white',
            borderRadius: '5px'
        },
        wrapper: {
            display: 'flex',
            alignItems: 'center',
        },
        img: {
            width: 90,
            height: 90,
            backgroundImage: props.img !== null ? `url("${props.img}")` : `url("${incognito}")`,
            backgroundSize: 'cover',
            backgroundPosition: '50% 50%',
            margin: 5,
            borderRadius: '50%'
        },
        title: {
            marginBottom: 8,
            marginLeft: 5,
            fontWeight: 'lighter'
        },
        description: {
            fontSize: 16,
            margin: 2
        },
        button: {
            margin: '10px 8px 5px 0'
        }
    };
    const date = new Date(props.date.slice(0, -1));

    return (
        <div className="reservation-card" style={{...props.style, ...styles.card}}>
            <div style={styles.wrapper}>
                <div style={styles.img} />
                <h3 style={styles.title}>{props.title}</h3>
            </div>
            <div style={{ margin: '0 0 0 8px' }}>
                <p style={styles.description}>{props.address}</p>
                <p style={styles.description}>{props.postalCode}</p>

                <p style={{...styles.description, color: purple_main}}>{date.toString().slice(0, -18)}</p>
                <p style={{...styles.description, color: purple_main}}>{props.people} {props.people === 1 ? 'Person' : 'People'}</p>
                <p>
                    <span style={{ color: '#3F51B5' }}>Status: </span>
                    <span style={{ color: props.status === 'a' ? '#2E7D32' : props.status === 'd' && '#E65100'}}>
                    {props.status === 'a' ? 'Accepted' : props.status === 'd' ? 'Declined' : 'Pending...'}
                    </span>
                </p>
            </div>
        </div>
    );
};

ReservationCard.propTypes = {
    title: PropTypes.string,
    address: PropTypes.string,
    postalCode: PropTypes.string,
    date: PropTypes.string,
    status: PropTypes.string,

    style: PropTypes.object,
    img: PropTypes.any,
    people: PropTypes.number

};

ReservationCard.defaultProps = {
    title: 'Bob\'s Burgers',
    address: '5412 Des Seigneurs, Apt. 554',
    postalCode: 'H4K 0L1',
    city: 'Montreal',
    province: 'Quebec',
    date: '03-07-2020',
    style: {},
    status: 'pending',
    people: 2
};

export default ReservationCard;
