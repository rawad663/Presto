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
                        first_name: '988 Greene av.',
                        last_name: 'ytrytdfbcx'
                    },
                    description: 'lololol',
                    name: 'French Cuisine',
                    address: '5600 Waldorf',
                    postalCode: 'K7L8E3',
                    phoneNumber: '657657646453'
                },
                {
                    user: {
                        username: 'gjgjhg@hg.com',
                        email:'gjgjhg@hg.com',
                        first_name: '34 Lucerne',
                        last_name: 'ytrytdfbcx'
                    },
                    description: 'lololol',
                    name: 'Pasta Bar',
                    address: '1247 Beauregard',
                    postalCode: 'H3B4J6',
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
                    name: 'Gentile',
                    address: '9299 Park Ave',
                    postalCode: 'H2N2A2',
                    phoneNumber: '657657646453'},
                {
                    user: {
                        username: 'gjgjhg@hg.com',
                        email:'gjgjhg@hg.com',
                        first_name: 'kjhkjh',
                        last_name: 'ytrytdfbcx'
                    },
                    description: 'lololol',
                    name: 'Mercury',
                    address: '555 Gordon st.',
                    postalCode: 'J7G0P0',
                    phoneNumber: '657657646453'},
                {
                    user: {
                        username: 'gjgjhg@hg.com',
                        email:'gjgjhg@hg.com',
                        first_name: 'kjhkjh',
                        last_name: 'ytrytdfbcx'
                    },
                    description: 'lololol',
                    name: 'Amir',
                    address: '432 Bertrand st.',
                    postalCode: 'J1JE5F6',
                    phoneNumber: '657657646453'}
            ]
        });
    }

    handleLike = () => {
        //keep resto card in liked restos
        this.setState( { index: ++this.state.index, animation: true} );
    };

    handleDislike = () => {
        this.setState( { index: ++this.state.index, animation: true} );
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
                    handleDislike = {this.handleDislike}
                    index = {this.state.index}
                    animation = {this.state.animation}
                />
            </div>
        );
    }

}