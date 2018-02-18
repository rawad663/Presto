import React, {Component} from 'react';
import CustomerHomeComponent from '../../components/CustomerHomeComponent';

export default class CustomerHomeContainer extends Component{

    constructor(props){
        super(props);

        this.state = {

        };

    }

    render(){
        return(
            <div>
                <CustomerHomeComponent

                />;
            </div>
        );
    }

}