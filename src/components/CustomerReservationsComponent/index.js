import React from 'react';
import NavBar from '../custom_components/NavBar';
import SideNav from '../custom_components/SideNav';
import {purple_main} from "../../resources/colors";

const CustomerReservationsComponent = props => {

    return (
        <div >
            <NavBar fullName="Rawad Karam">

            </NavBar>
            <SideNav />
            <h3>Hello</h3>
        </div>
    );
};

CustomerReservationsComponent.propsTypes = {


};

export default CustomerReservationsComponent;