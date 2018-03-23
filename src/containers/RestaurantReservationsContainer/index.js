import React, {Component} from 'react';
import CustomerReservationsComponent from '../../components/CustomerReservationsComponent';
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
        this.setState({ restos: [
                {
                    customerPic : 'r',
                    customerName: 'Vivek',
                    numOfPpl: '1',
                    date:'Sunday, March 04, 1997. 8:30pm',
                    state: null,
                },
                {
                    customerPic : '',
                    customerName: 'Ven',
                    numOfPpl: '3',
                    date: '06/13/2007',
                    state: null
                },
                {
                    customerPic : '',
                    customerName: 'Rawad',
                    numOfPpl: '5',
                    date: '08/13/2007',
                    state: null
                }] });
    }

    handleAccept = () => {
        this.setState();
    }

    handleDecline = () => {
        this.setState();
    }



    render(){
        return(
            <div>
                <RestaurantReservationsComponent
                    restos={this.state.restos}
                    route={this.props.location.pathname}
                    history={this.props.history}
                    loggedInUser={localStorage.loggedInUser !== undefined ? JSON.parse(localStorage.loggedInUser) : null}
                    handleAccept = {this.handleAccept()}
                    handleDecline = {this.handleDecline()}

                />
            </div>
        );
    }

}