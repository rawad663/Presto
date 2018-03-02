import React from 'react';
import {purple_main} from "../../resources/colors";
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap';
import PropTypes from "prop-types";
import NavBar from '../custom_components/NavBar';


const RestaurantReservationsComponent = props => {

    const styles = {
        title: {
            color: purple_main
        },
        buttonAccept:{
            backgroundColor:'green',
            color: 'white',
            width: 100
        },
        buttonDecline:{
            backgroundColor:'red',
            color:'white',
            width: 100
        }

    };
    return (
        <div>
            <div>
                <NavBar fullName="Rawad Karam"/>
                <h2 style={{ margin: '40px auto' }} className="mainTitle"> Pending Reservations </h2>

            </div>

            <div style={{ display: 'inline' }}>


                <Button
                    onClick={props.handleAccept}
                    style={{ ...styles.buttonAccept, }}
                >
                    Accept
                </Button>

                <Button
                    onClick={props.handleDecline}
                    style={{ ...styles.buttonDecline, marginLeft: 8 }}
                >
                    Decline
                </Button>
            </div>
        </div>




    );
};

RestaurantReservationsComponent.propsTypes = {
    handleAccept: PropTypes.func,
    handleDecline: PropTypes.func,

};

export default RestaurantReservationsComponent;