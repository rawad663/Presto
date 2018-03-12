import React, { Component } from 'react';
import LikedRestaurantsComponent from '../../components/LikedRestaurantsComponent';

export default class LikedRestaurantsContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            restaurants: []
        }
    }

    componentDidMount() {
        this.setState({
            restaurants: ['Falafel Andre', 'Bob\'s Burger', 'World Wonderful Candy']
        });
    }

    render() {

        return(
            <LikedRestaurantsComponent history={this.props.history} restaurants={this.state.restaurants} />
        );
    }
}