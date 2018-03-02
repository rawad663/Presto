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
        this.props.history.push('/reservations')
    }

    handleSettingsClicked = () => {
        this.props.history.push('/settings')
    }

    // handleARstAcceptClicked =() => {
    //     this.props.
    // }

    render(){
        return(
            <div>
                <CustomerHomeComponent
                    handleCustRsvClicked = {this.handleCustRsvClicked}
                    handleSettingsClicked = {this.handleSettingsClicked}
                />;

            </div>
        );
    }

}