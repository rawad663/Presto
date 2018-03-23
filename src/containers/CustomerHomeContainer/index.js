import React, {Component} from 'react';
import CustomerHomeComponent from '../../components/CustomerHomeComponent';
import {routes, aPost, aGet} from "../../api/api.js";


export default class CustomerHomeContainer extends Component{

    constructor(props){
        super(props);

        this.state = {
            items: [],
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
                    description: 'French food for the rich.  Hungry? Nice dude',
                    resto_name: 'French Cuisine',
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
                    description: 'Bar that serves beer with lasagna and meatballs served in cold turkey with beef jerky legs',
                    resto_name: 'Pasta Bar',
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
                    description: 'Call this restaurant Gentle cuz its gentille to ur body, mind, and soul.  ' +
                    'Serves no alcohol what soever.  Sunday is the day of the lord',
                    resto_name: 'Gentile',
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
                    description: 'Went to mars and back, we brought back mercury.  Opened this restaurant with the profits.  If u want a ' +
                    'once in a lifetime experience do not come here, go to Iron across the street instead.',
                    resto_name: 'Mercury',
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
                    description: 'Jumbatron once told megatron that if the world was worth saving, it was solely because of ' +
                    'how good Amirs food tasted.  Megatron is said to have eaten 8 diesel engines and 3 trusk tires here.  ' +
                    'lightning mcqueen fans eat for free',
                    resto_name: 'Amir',
                    address: '432 Bertrand st.',
                    postalCode: 'J1JE5F6',
                    phoneNumber: '657657646453'}
            ]
        });

        // aGet(routes.restos).then(response => {
        //     this.setState({
        //         items: response.data
        //     });
        // })

    }

    handleLike = id => {
        //keep resto card in liked restos
        aPost(routes.likeRestaraunt(id), {}).then(response => {
            this.setState( { index: ++this.state.index, animation: true} );
        }).catch(err => {
            console.log(err);
        });

    };

    handleDislike = id => {
        //keep resto card in liked restos
        aPost(routes.dislikeRestaraunt(id), {}).then(response => {
            this.setState( { index: ++this.state.index, animation: true} );
        }).catch(err => {
            console.log(err);
        });
    };

    render(){
        return(
            <div>
                <CustomerHomeComponent
                    loggedInUser={localStorage.loggedInUser !== undefined ? JSON.parse(localStorage.loggedInUser) : null}
                    history={this.props.history}
                    route={this.props.location.pathname}
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