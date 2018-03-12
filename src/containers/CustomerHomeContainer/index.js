import React, {Component} from 'react';
import CustomerHomeComponent from '../../components/CustomerHomeComponent';

export default class CustomerHomeContainer extends Component{

    constructor(props){
        super(props);

        this.state = {

        };

    }


    handleCustRsvClicked = () => {
        this.props.history.push('/customer-reservations')
    };

    render(){
        return(
            <div>
                <CustomerHomeComponent
                    loggedInUser={localStorage.loggedInUser !== undefined ? JSON.parse(localStorage.loggedInUser) : null}
                    history={this.props.history}
                    route={this.props.location.pathname}
                    handleCustRsvClicked = {this.handleCustRsvClicked}

                />
            </div>
        );
    }

}