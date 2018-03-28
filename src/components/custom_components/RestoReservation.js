import {Well} from 'react-bootstrap';
import { Button} from 'reactstrap';
import React from 'react';
import {purple_main} from "../../resources/colors";
import PropTypes from "prop-types";
import ReservationCard from "./ReservationCard";



const RestoReservation  = props => {

    const styles = {
        buttonAccept:{
            backgroundColor:purple_main,
            color: 'white',
            width: 100
        },
        buttonDecline:{
            backgroundColor:'#4d79ff',
            color:'white',
            width: 100

        },
        buttonNotChosen:{
            backgroundColor:'gray',
            width: 100,
            color: '#404040'
        },
        img: {
            width: 60,
            height: 60,
            margin: 5,
            borderRadius: '50%'
        },
        display:{
            fontSize: 17,
            marginLeft:60
        },
        well:{
            verticalAlign:'middle',
            backgroundColor:'white',
            width: '100%',
            margin: '15px 10px 0px 8px',

        },
        name:{
            fontWeight:'bold',
            fontSize: 17,
            margin:60
        },
        date:{
            marginLeft:80,
            marginRight:30,
            fontSize: 17,
        }

    };
    return (
        <div>
            <Well style = {styles.well}>
                <div>
                    <img src={props.img} style={styles.img}/>
                    <span  style={styles.name}>{props.customerName}</span>
                    <span  style={styles.display}>{props.numOfPpl}</span>
                    <span  style={styles.date}>{props.date}</span>
                    <Button onClick={props.handleAccept} style={{ ...styles.buttonAccept, }} id = 'acceptButton'> Accept </Button>
                    <Button onClick={props.handleDecline} style={{ ...styles.buttonDecline, marginLeft: 8 }} id = 'declineButton'> Decline </Button>

                </div>
            </Well>

        </div>
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