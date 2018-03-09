import React, {Component} from 'react';
import CustomerHomeComponent from '../../components/CustomerHomeComponent';

'use strict';



export default class CustomerHomeContainer extends Component{

    constructor(props){
        super(props);

        this.state = {
            items: [
                {
                restaurantName: 'Resto1',
                address: 'restoaddress1',
                postalCode: 'restocode1',
                phoneNumber: '5140000000'
                },
                {
                    restaurantName: 'Resto1',
                    address: 'restoaddress1',
                    postalCode: 'restocode1',
                    phoneNumber: '5140000000'
                },
                {
                    restaurantName: 'Resto1',
                    address: 'restoaddress1',
                    postalCode: 'restocode1',
                    phoneNumber: '5140000000'
                }
            ],
            index: 1
        };

    }

    componentDidMount() {
        this.setState({
            items: [
                {
                    user: {
                        username: 'gjgjhg@hg.com',
                        email:'gjgjhg@hg.com',
                        first_name: 'kjhkjh',
                        last_name: 'ytrytdfbcx'
                    },
                    description: 'lololol',
                    name: 'Bobby',
                    address: 'mhgyrttre456tuyhvm',
                    postalCode: 'hhgr56ynb',
                    phoneNumber: '657657646453'
                },
                {
                    user: {
                        username: 'gjgjhg@hg.com',
                        email:'gjgjhg@hg.com',
                        first_name: 'kjhkjh',
                        last_name: 'ytrytdfbcx'
                    },
                    description: 'lololol',
                    name: 'Tommy',
                    address: 'mhgyrttre456tuyhvm',
                    postalCode: 'hhgr56ynb',
                    phoneNumber: '657657646453'
                },
                {
                    user: {
                        username: 'gjgjhg@hg.com',
                        email:'gjgjhg@hg.com',
                        first_name: 'kjhkjh',
                        last_name: 'ytrytdfbcx'
                    },
                    description: 'lololol',
                    name: 'Froggy',
                    address: 'mhgyrttre456tuyhvm',
                    postalCode: 'hhgr56ynb',
                    phoneNumber: '657657646453'},
                {
                    user: {
                        username: 'gjgjhg@hg.com',
                        email:'gjgjhg@hg.com',
                        first_name: 'kjhkjh',
                        last_name: 'ytrytdfbcx'
                    },
                    description: 'lololol',
                    name: 'Soggy',
                    address: 'mhgyrttre456tuyhvm',
                    postalCode: 'hhgr56ynb',
                    phoneNumber: '657657646453'}
            ]
        });
    }

    handleLike = () => {
        //keep resto card in liked restos
        this.setState({ index: ++this.state.index })
    };

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
                    restaurantList = {this.state.items}
                    handleLike = {this.handleLike}
                    index = {this.state.index}
                />
            </div>
        );
    }

}