import React, {Component} from 'react';
import CustomerHomeComponent from '../../components/CustomerHomeComponent';

export default class CustomerHomeContainer extends Component{

    constructor(props){
        super(props);

        this.state = {

        };

    }
    handleCustRsvClicked = () => {
        this.props.history.push('/reservations')
    }

    render(){
        return(
            <div>
                <CustomerHomeComponent
                    handleCustRsvClicked = {this.handleCustRsvClicked}

                />;
            </div>
        );
    }

}