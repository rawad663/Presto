import React, {Component} from 'react';
import RestaurantReservationsComponent from "../../components/RestaurantReservationsComponent";
import {routes, aPost, aGet} from "../../api/api";


export default class ReservationsContainer extends Component{

    constructor(props){
        super(props);

        this.state = {
            reservation: []

        };
    }

    componentDidMount() {

        if(localStorage.loggedInUser !== undefined) {
            aGet(routes.reservations).then(response => {
                this.setState({
                    reservation: response.data
                });
                console.log(response.data);
            });
        }

    }

    handleAccept = id => {
        aPost(routes.acceptReservation(id), {}).then(() => {
            this.setState(  );
        }).catch(err => {
            console.log(err);
        });
    }

    handleDecline = id => {
        aPost(routes.declineReservation(id), {}).then(() => {
            this.setState(  );
        }).catch(err => {
            console.log(err);
        });
    }



    render(){
        return(
            <div>
                <RestaurantReservationsComponent
                    reservation={this.state.reservation}
                    route={this.props.location.pathname}
                    history={this.props.history}
                    loggedInUser={localStorage.loggedInUser !== undefined ? JSON.parse(localStorage.loggedInUser) : null}
                    handleAccept = {this.handleAccept}
                    handleDecline = {this.handleDecline}

                />
            </div>
        );
    }

}