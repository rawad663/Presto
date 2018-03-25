import React, {Component} from 'react';
import CustomerReservationsComponent from '../../components/CustomerReservationsComponent';

export default class ReservationsContainer extends Component{

    constructor(props){
        super(props);

        this.state = {
            show: false
        };
    }

    handleClose = () => {
        this.setState({ show: false });
    };

    handleShow = () => {
        this.setState({ show: true });
    };

    render(){
        return(
            <div>
                <CustomerReservationsComponent
                    route={this.props.location.pathname}
                    loggedInUser={localStorage.loggedInUser !== undefined ? JSON.parse(localStorage.loggedInUser) : null}
                    show={this.state.show}
                    handleShow={this.handleShow}
                    handleClose={this.handleClose}
                />
            </div>
        );
    }

}