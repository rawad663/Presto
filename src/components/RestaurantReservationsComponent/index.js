import React from 'react';
import {blue,purple_main} from "../../resources/colors";
import { Well } from 'react-bootstrap';
import PropTypes from "prop-types";
import NavBar from '../custom_components/NavBar';
import SideNav from '../custom_components/SideNav';
import RestoReservation from "../custom_components/RestoReservation";


const RestaurantReservationsComponent = props => {

    const styles = {
        restoReservation: {
            fontWeight: 'lighter',
            color: purple_main,
            maxWidth: '100%',
            height: 60

        },
        reservations: {
            fontWeight: 'lighter',
            color: purple_main,
            margin: '40px 30px 0 90px'
        },
        well: {
            minWidth: 300,
            maxWidth: '80%',
            height: 480,
            margin: 50,
            marginTop:20,
            overflowY: 'scroll'
        },
        row:{
            marginBottom:10
        },
        header:{
            verticalAlign:'middle',
            backgroundColor:'white',
            width: '100%',
            fontSize: 15,
            height:60,
            margin: 'auto'
        }
    };

    const renderRestoReservation = restos => restos.map((restoReservation,i) => {
        const data ={
            customerName:restoReservation.customer.user.first_name + restoReservation.customer.user.last_name,
            numOfPpl:restoReservation.num_people,
            date:restoReservation.datetime,
            img:'https://presto-core.herokuapp.com' + restoReservation.resto.photo
        };
        return <RestoReservation key={i} style={styles.restoReservation} {...data} />
    });

    const items = [
        { name: 'Home', route: '/restaurant' },
    ];

    return(
        <div>
            <NavBar />
            <SideNav
                items={items}
                history={props.history}
                route={props.route}
            />
            <div style={{ marginLeft: 200 }}>
                <div style={{ display: 'flex' }} className = "reservation">
                    <h1  style={styles.reservations}>Reservations</h1>
                </div>
                <div>
                {props.reservations !== undefined && props.reservations.length > 0
                    ?
                    <Well style={styles.well}>
                        <Well style={styles.header}>
                            <div style={{ display: 'flex', width: '55%', justifyContent: 'space-around', marginLeft: '12%' }}>
                                <p style={{ fontWeight: 'bolder', fontSize: 17, margin: 10 }}>Name</p>
                                <p style={{ fontWeight: 'bolder', fontSize: 17, margin: 10 }}>Number of People </p>
                                <p style={{ fontWeight: 'bolder', fontSize: 17, margin: 10 }}>Date</p>
                            </div>
                        </Well>
                    <div style={{ width: '100%' }}>
                        {renderRestoReservation(props.reservations)}
                    </div>
                    </Well>
                    : <p style={{ color: '#616161', fontSize: 14 , marginLeft:50}}>* No reservations found! Sorry about that... </p>}
                </div>
            </div>
        </div>
    );
};

RestaurantReservationsComponent.propsTypes = {

    history: PropTypes.object,
    reservations: PropTypes.array,
    route: PropTypes.string,
    loggedInUser: PropTypes.object

};

export default RestaurantReservationsComponent;