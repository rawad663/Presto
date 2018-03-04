import React, {Component} from 'react';
import CustomerReservationsComponent from '../../components/CustomerReservationsComponent';

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
            </div>
        );
    }

}