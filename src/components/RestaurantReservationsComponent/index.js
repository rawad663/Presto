import React from 'react';
import {purple_main} from "../../resources/colors";
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap';
import PropTypes from "prop-types";

const RestaurantReservationsComponent = props => {

    const styles = {
        title: {
            color: purple_main
        },
        buttonAccept:{
            color: 'green'
        },
        buttonDecline:{
            color:'red'
        }

    };
    return (
        <div style={styles.title}>
            <div style={{ display: 'inline' }}>
                <Button
                    onClick={props.handleAccept}
                    style={{ ...styles.buttonAccept, ...styles.login, width: 150 }}
                    type="submit"
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