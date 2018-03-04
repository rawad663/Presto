import React, {Component} from 'react';
import CustomerReservationsComponent from '../../components/CustomerReservationsComponent';
import RestaurantReservationsComponent from "../../components/RestaurantReservationsComponent";
import {routes, aPost} from "../../api/api";

export default class ReservationsContainer extends Component{

    constructor(props){
        super(props);

        this.state = {

        };

    }



    handleAccept = () => {
        const reply = true ;
        this.postReply(reply);


    };

    handleDecline = () => {
        const reply = false ;
        this.postReply(reply);

    };

    postReply = (reply) => {

        aPost(routes.RSTReservation, reply)
            .then(response => {




            })
            .catch(err => {
                console.log(err)
            });
    };

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