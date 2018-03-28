import {Well} from 'react-bootstrap';
import { Button} from 'reactstrap';
import React from 'react';
import PropTypes from "prop-types";
import ReservationCard from "./ReservationCard";



const RestoReservation  = props => {

    const styles = {
        buttonAccept:{
            backgroundColor: '#651FFF',
            color: 'white'
        },
        buttonDecline:{
            marginRight: -50,
            backgroundColor:'#424242',
            color:'white'
        },
        img: {
            backgroundImage: `url("${props.img}")`,
            backgroundSize: 'cover',
            margin: '0 -30px',
            width: 60,
            height: 60,
            borderRadius: '50%'
        },
        display:{
            fontSize: 17,
            marginLeft:60
        },
        well:{
            verticalAlign:'center',
            backgroundColor:'white',
            maxWidth: 900,
            height: 90,
            display: 'flex',
            justifyContent: 'space-around',
            margin: '15px auto',

        },
        name:{
            marginLeft: -28,
            fontSize: 17
        },
        date:{
            marginLeft:10,
            marginRight:-80,
            fontSize: 17,
        }

    };


    const date = new Date(props.date.slice(0, -1));

    return (
        <Well style={styles.well}>
            <div style={styles.img}/>
            <p style={styles.name}>{props.customerName}</p>
            <p style={styles.display}>{props.numOfPpl}</p>
            <div>
                <p style={styles.date}>{date.toString().slice(0, -18)}</p>
                <p>
                    <span style={{ color: '#3F51B5' }}>Status: </span>
                    <span style={{ color: props.status === 'a' ? '#2E7D32' : props.status === 'd' && '#E65100'}}>
                    {props.status === 'a' ? 'Accepted' : props.status === 'd' ? 'Declined' : 'Pending...'}
                    </span>
                </p>
            </div>
            <div style={{ display: 'flex', marginLeft: 80 }}>
                <Button onClick={() => { props.handleAccept(props.id) }} style={styles.buttonAccept} id = 'acceptButton'> Accept </Button>
                <Button onClick={() => { props.handleDecline(props.id) }} style={{ ...styles.buttonDecline, marginLeft: 8 }} id = 'declineButton'> Decline </Button>
            </div>
        </Well>
    )
};
RestoReservation.prototype = {
    customerName: PropTypes.string,
    numOfPpl: PropTypes.string,
    date: PropTypes.string,
    pic: PropTypes.object,
    handleAccept: PropTypes.func,
    handleDecline: PropTypes.func,
    id: PropTypes.number

};

ReservationCard.defaultProps = {
    customerName: 'Vivek',
    numOfPpl: '1',
    date: '05/13/2007',

};

export default RestoReservation;