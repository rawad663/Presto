import React from 'react';
import PropTypes from 'prop-types';

import NavBar from '../custom_components/NavBar';
import SideNav from '../custom_components/SideNav';
import ReservationCard from '../custom_components/ReservationCard';
import ReservationForm from '../custom_components/ReservationForm';

import { Well, Glyphicon } from 'react-bootstrap';
import { Button } from 'reactstrap';

import bar from '../../resources/images/bar-buffet.jpg';
import chinese from '../../resources/images/chinese-food.jpg';
import mexican from '../../resources/images/mexican-food.jpg';
import turkish from '../../resources/images/turkish-food.jpg';



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

    const renderReservations = reservations => reservations.map(item => {
        const resto = item.resto;
        const baseUrl = 'https://presto-core.herokuapp.com';

        return <ReservationCard
                style={styles.reservationCard}
                title={resto.resto_name}
                address={resto.address}
                img={baseUrl+resto.photo}
                postalCod={resto.postal_code}
                date={item.date}
                people={item.num_people}
            />

    });

    return (
        <div style={{ height: '100%' }}>
            <NavBar />
            <SideNav items={items} route={props.route} />

            <div style={{ marginLeft: 200 }}>
                <div style={{ display: 'flex' }}>
                    <h1 style={styles.reservations}>Reservations</h1>
                    <Button onClick={props.handleShow} id="new-reservation" className="button-click">
                        <Glyphicon glyph="plus"/>
                    </Button>
                    <ReservationForm handleShow={props.handleShow} handleClose={props.handleClose} show={props.show} />
                </div>
                <Well style={styles.well}>
                    { renderReservations(props.reservations) }

                    <ReservationCard
                        style={styles.reservationCard}
                        title="Bar Lounge"
                        address="377 Des Seigneurs"
                        img={bar}
                        postalCod="H3J0A9"
                        city="Montreal"
                        province="Quebec"
                        date="Sunday, March 04, 1997. 7:30pm"
                    />
                    <ReservationCard
                        style={styles.reservationCard}
                        title="Wa Tu It"
                        address="5424 Park Avn"
                        img={chinese}
                        postalCod="H4K4B2"
                        city="Montreal"
                        province="Quebec"
                        date="Sunday, March 04, 1997. 8:30pm"
                    />
                    <ReservationCard
                        style={styles.reservationCard}
                        title="3 Amigos"
                        address="3200 Maisonneuve Avn."
                        img={mexican}
                        postalCod="H4L9A9"
                        city="Montreal"
                        province="Quebec"
                        date="Saturday, March 05, 2018. 9:30pm"
                    />
                    <ReservationCard
                        style={styles.reservationCard}
                        title="Antep Kebab"
                        address="2000 AtWater Street"
                        img={turkish}
                        postalCod="L0P5B8"
                        city="Montreal"
                        province="Quebec"
                        date="Sunday, March 04, 1997. 8:30pm"
                    />
                </Well>
            </div>
        </div>
    );
};

CustomerReservationsComponent.propsTypes = {
    show: PropTypes.bool,
    route: PropTypes.string,
    loggedInUser: PropTypes.object,
    handleShow: PropTypes.func,
    handleClose: PropTypes.func
};

CustomerReservationsComponent.defaultProps = {
    show: false
};

export default CustomerReservationsComponent;