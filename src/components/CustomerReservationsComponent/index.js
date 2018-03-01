import React from 'react';
import {purple_main} from "../../resources/colors";

const CustomerReservationsComponent = props => {

    const styles = {
        title: {
            color: purple_main
        }
    };
    return (
        <div style={styles.title}>
            Customer Reservations Component
        </div>
    );
};

CustomerReservationsComponent.propsTypes = {


};

export default CustomerReservationsComponent;