import React, {Component} from 'react';
import RestaurantReservationsComponent from "../../components/RestaurantReservationsComponent";
import {routes, aPost, aGet} from "../../api/api";


export default class ReservationsContainer extends Component{

    constructor(props){
        super(props);

        this.state = {
            restos: []

        };
    }

    componentDidMount() {
        // aGet('/reservations').then(response => {
        //     this.setState({ restos: response.data });
        // });

        if(localStorage.loggedInUser !== undefined) {
            const loggedInUser = JSON.parse(localStorage.loggedInUser);
            aGet(routes.customer(loggedInUser.user.id)).then(response => {

                this.setState({
                    restaurants: response.data.restoReservations
                });
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
                    restos={this.state.restos}
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