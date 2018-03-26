import React from 'react';
import { Glyphicon } from 'react-bootstrap';
import { Button } from 'reactstrap';
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

    return (
        <div className="reservation-card" style={{...props.style, ...styles.card}}>
            <div style={styles.wrapper}>
                <div style={styles.img} />
                <h3 style={styles.title}>{props.title}</h3>
            </div>
            <div style={{ margin: '0 0 0 8px' }}>
                <p style={styles.description}>{props.address}</p>
                <p style={styles.description}>{props.postalCode}</p>

                <p style={{...styles.description, color: purple_main}}>{props.date}</p>
                <p style={{...styles.description, color: purple_main}}>{props.people} People</p>
                <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
                    <Button className="button-click" title="Edit Reservation" style={styles.button} color="primary">
                        <Glyphicon glyph="pencil" />
                    </Button>
                    <Button className="button-click" title="Cancel Reservation" style={styles.button} color="danger">
                        <Glyphicon glyph="remove" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

ReservationCard.propTypes = {
    title: PropTypes.string,
    address: PropTypes.string,
    postalCode: PropTypes.string,
    date: PropTypes.string,
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
    date: 'Sunday, March 25, 1997. 4:20pm',
    style: {}
};

export default ReservationCard;
