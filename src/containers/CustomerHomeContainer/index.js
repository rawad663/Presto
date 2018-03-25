import React, {Component} from 'react';
import CustomerHomeComponent from '../../components/CustomerHomeComponent';
import {routes, aPost, aGet} from "../../api/api.js";

export default class CustomerHomeContainer extends Component{

    constructor(props){
        super(props);

        this.state = {
            items: [],
            index: 0,
            animation: false
        };

    }

    componentDidMount() {
        aGet(routes.restos).then(response => {
            this.setState({
                items: response.data
            });
        })

    };

    handleLike = id => {
        aPost(routes.likeRestaraunt(id), {}).then(() => {
            this.setState( { index: ++this.state.index, animation: true} );
        }).catch(err => {
            console.log(err);
        });

    };

    handleDislike = id => {
        aPost(routes.dislikeRestaraunt(id), {}).then(() => {
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
