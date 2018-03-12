import React, {Component} from 'react';
import CustomerHomeComponent from '../../components/CustomerHomeComponent';



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
            index: 1,
            animation: false
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
                    phoneNumber: '657657646453'},
                {
                    user: {
                        username: 'gjgjhg@hg.com',
                        email:'gjgjhg@hg.com',
                        first_name: 'kjhkjh',
                        last_name: 'ytrytdfbcx'
                    },
                    description: 'lololol',
                    name: 'Joggy',
                    address: 'mhgyrttre456tuyhvm',
                    postalCode: 'hhgr56ynb',
                    phoneNumber: '657657646453'}
            ]
        });
    }

    handleLike = () => {
        //keep resto card in liked restos
        this.setState( { index: ++this.state.index, animation: true}, () => {this.setState({animation: false})} )
    };

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
                    restaurantList = {this.state.items}
                    handleLike = {this.handleLike}
                    index = {this.state.index}
                    animation = {this.state.animation}
                />
            </div>
        );
    }

}