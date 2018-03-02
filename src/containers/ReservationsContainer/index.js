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
        const isCustomer = false;

        if(isCustomer){
            return(
                <div>
                    <CustomerReservationsComponent

                    />





                </div>
                );
            }

        else{
                return(
                    <div>
                        <RestaurantReservationsComponent


                        />
                    </div>
                );

        }



    }

}