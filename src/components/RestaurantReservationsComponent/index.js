import React from 'react';
import {blue,purple_main} from "../../resources/colors";
import { Well } from 'react-bootstrap';
import PropTypes from "prop-types";
import NavBar from '../custom_components/NavBar';
import {routes, aGet} from "../../api/api";
import SideNav from '../custom_components/SideNav';
import RestoReservation from "../custom_components/RestoReservation";


const RestaurantReservationsComponent = props => {

    const styles = {
        RestoReservation: {
            fontWeight: 'lighter',
            color: purple_main,

        },
        well: {
            minWidth: 300,
            maxWidth: '80%',
            height: 480,
            display: 'flex',
            flexWrap: 'wrap',
            margin: 50,
            marginTop:20,
            overflowY: 'scroll'
        },
        list:{
            marginLeft:200

        },
        head:{
            marginLeft:220
        },
        row:{
            marginBottom:10
        },
        column:{
            verticalAlign:'middle',
            backgroundColor:'white',
            width: '100%',
            margin: '15px 15px',
            fontSize: 15
        },
        display:{
            margin:70
        },
        name:{
            marginLeft:125
        }

    };


    const renderRestoReservation = restos => restos.map(restoReservation => (
        <RestoReservation style={styles.RestoReservation} resto={restoReservation} />
    ));

    const items = [
        { name: 'Home', route: '/restaurantReservation' },
        { name: 'Liked Restaurants', route: '/customer/liked' },
        { name: 'Reservations', route: '/customer/reservations' }
    ];


    return(
        <div>
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
                <div style={{ display: 'flex' }} className = "reservation">
                    <h1  style = {styles.reservations}>Reservations</h1>
                </div>
                <Well style={styles.well}>

                    <Well style={styles.column}>
                        <div>
                            <span style={styles.name}>Name</span>
                            <span style={styles.display}>Number of People </span>
                            <span style={styles.display}>Date</span>
                        </div>
                    </Well>
                    <div>
                        {props.RestoReservation.length > 0
                            ? renderRestoReservation(props.restaurants)
                            : <p style={{ color: '#616161', fontSize: 14 }}>* No Reservations yet</p>}

                        <RestoReservation
                            style={styles.RestoReservation}
                            customerName= 'Vivek'
                            numOfPpl= '1'
                            date='Sunday, March 04, 1997. 8:30pm'

                        />
                        <RestoReservation
                            style={styles.RestoReservation}
                            customerName= 'Vivek'
                            numOfPpl= '1'
                            date='Sunday, March 04, 1997. 8:30pm'

                        />
                        <RestoReservation
                            style={styles.RestoReservation}
                            customerName= 'Vivek'
                            numOfPpl= '1'
                            date='Sunday, March 04, 1997. 8:30pm'

                        />
                        <RestoReservation
                            style={styles.RestoReservation}
                            customerName= 'Vivek'
                            numOfPpl= '1'
                            date='Sunday, March 04, 1997. 8:30pm'

                        />

                    </div>

                    {/*<RestoReservation  style={styles.RestoReservation} />*/}
                    {/*<RestoReservation  style={styles.RestoReservation} />*/}
                    {/*<RestoReservation  style={styles.RestoReservation} />*/}
                    {/*<RestoReservation  style={styles.RestoReservation} />*/}
                    {/*<RestoReservation  style={styles.RestoReservation} />*/}
                    {/*<RestoReservation  style={styles.RestoReservation} />*/}
                    {/*<RestoReservation  style={styles.RestoReservation} />*/}
                    {/*<RestoReservation  style={styles.RestoReservation} />*/}
                </Well>
            </div>
        </div>
    );


};

RestaurantReservationsComponent.propsTypes = {

    history: PropTypes.object,
    route: PropTypes.string,
    loggedInUser: PropTypes.object

};

export default RestaurantReservationsComponent;