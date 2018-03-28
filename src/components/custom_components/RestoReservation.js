import {Well} from 'react-bootstrap';
import { Button} from 'reactstrap';
import React from 'react';
import {purple_main} from "../../resources/colors";
import PropTypes from "prop-types";
import ReservationCard from "./ReservationCard";



const RestoReservation  = props => {

    const styles = {
        buttonAccept:{
            backgroundColor: '#651FFF',
            color: 'white',
            width: 100
        },
        buttonDecline:{
            backgroundColor:'#424242',
            color:'white',
            width: 100
        },
        img: {
            margin: '0 8px',
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
            fontSize: 17
        },
        date:{
            marginLeft:80,
            marginRight:30,
            fontSize: 17,
        }

    };

    const date = new Date(props.date);

    return (
        <Well style={styles.well}>
            <img src={props.img} style={styles.img}/>
            <p style={styles.name}>{props.customerName}</p>
            <p style={styles.display}>{props.numOfPpl}</p>
            <p style={styles.date}>{`${date.getDay()}/${date.getMonth()}/${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}`}</p>
            <div style={{ display: 'flex' }}>
                <Button onClick={props.handleAccept} style={styles.buttonAccept} id = 'acceptButton'> Accept </Button>
                <Button onClick={props.handleDecline} style={{ ...styles.buttonDecline, marginLeft: 8 }} id = 'declineButton'> Decline </Button>
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

};

ReservationCard.defaultProps = {
    customerName: 'Vivek',
    numOfPpl: '1',
    date: '05/13/2007',

};

export default RestoReservation;