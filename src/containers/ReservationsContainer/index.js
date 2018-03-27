import React, {Component} from 'react';
import CustomerReservationsComponent from '../../components/CustomerReservationsComponent';
import RestaurantReservationsComponent from "../../components/RestaurantReservationsComponent";

export default class ReservationsContainer extends Component{

    constructor(props){
        super(props);

        this.state = {

        };

    }

    render(){
        return(
            <div>
                <CustomerReservationsComponent />
                <RestaurantReservationsComponent />
            </div>
        );
    }

}