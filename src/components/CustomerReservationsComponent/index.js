import React from 'react';
import PropTypes from 'prop-types';
import NavBar from '../custom_components/NavBar';
import SideNav from '../custom_components/SideNav';
import ReservationCard from '../custom_components/ReservationCard';
import { Well, Glyphicon } from 'react-bootstrap';
import { Button } from 'reactstrap';

import {purple_main} from "../../resources/colors";

const CustomerReservationsComponent = props => {

    const styles = {
        reservations: {
            fontWeight: 'lighter',
            color: purple_main,
            margin: '40px 30px 0 90px'
        },
        well: {
            minWidth: 300,
            maxWidth: '80%',
            height: 530,
            display: 'flex',
            flexWrap: 'wrap',
            margin: 50,
            overflowY: 'scroll'
        },
        reservationCard: {
            margin: 10
        }
    };

    const items = [
        { name: 'Home', route: '/customer' },
        { name: 'Liked Restaurants', route: '/customer/liked' },
        { name: 'Reservations', route: '/customer/reservations' }
    ];

    return (
        <div style={{ height: '100%' }}>
            <NavBar
                fullName={props.loggedInUser !== null
                    ? `${props.loggedInUser.user.first_name} ${props.loggedInUser.user.last_name}`
                    : 'Fustat Fargin'}
            />
            <SideNav
                items={items}
                history={props.history}
                route={props.route}
            />

            <div style={{ marginLeft: 200 }}>
                <div style={{ display: 'flex' }}>
                    <h1 style={styles.reservations}>Reservations</h1>
                    <Button id="new-reservation" className="button-click">
                        <Glyphicon glyph="plus"/>
                    </Button>
                </div>
                <Well style={styles.well}>
                    <ReservationCard
                        style={styles.reservationCard}
                        title="Subway"
                        address="377 Des Seigneurs, Apt. 307"
                        postalCod="H3J0A9"
                        city="Montreal"
                        province="Quebec"
                        date="Sunday, March 04, 1997. 8:30pm"
                    />
                    <ReservationCard  style={styles.reservationCard} />
                    <ReservationCard  style={styles.reservationCard} />
                    <ReservationCard  style={styles.reservationCard} />
                    <ReservationCard  style={styles.reservationCard} />
                    <ReservationCard  style={styles.reservationCard} />
                    <ReservationCard  style={styles.reservationCard} />
                    <ReservationCard  style={styles.reservationCard} />
                    <ReservationCard  style={styles.reservationCard} />
                </Well>
            </div>
        </div>
    );
};

CustomerReservationsComponent.propsTypes = {
    history: PropTypes.object,
    route: PropTypes.string,
    loggedInUser: PropTypes.object
};

export default CustomerReservationsComponent;