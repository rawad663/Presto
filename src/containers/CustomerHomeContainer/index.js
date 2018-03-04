import React, {Component} from 'react';
import CustomerHomeComponent from '../../components/CustomerHomeComponent';

export default class CustomerHomeContainer extends Component{

    constructor(props){
        super(props);

        this.state = {

        };

    }


    handleCustRsvClicked = () => {
        // TODO: ONE OF THESE ADDRESSES NEED TO BE CHANGED? (handleCustRsvClicked & handleRestoRsvClicked)
        this.props.history.push('/customer-reservations')
    };

    handleSettingsClicked = () => {
        this.props.history.push('/settings')
    };

    render(){
        return(
            <div>
                <CustomerHomeComponent
                    history={this.props.history}
                    route={this.props.location.pathname}
                    handleCustRsvClicked = {this.handleCustRsvClicked}
                    handleSettingsClicked = {this.handleSettingsClicked}
                />
            </div>
        );
    }

}