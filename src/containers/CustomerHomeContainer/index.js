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
        aGet(routes.restos).then(response => {
            this.setState({
                items: response.data
            });
        })

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