import React, {Component} from 'react';
import CustomerHomeComponent from '../../components/CustomerHomeComponent';

'use strict';
import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet
} from 'react-native';
import flattenStyle from 'flattenStyle';
import CardStack from 'react-native-card-stack';


export default class CustomerHomeContainer extends Component{

    constructor(props){
        super(props);

        this.state = {
            allCards: [],
            displayedCards: [],

        };

    }

    componentWillMount() {
        this.pullUsers();
    }

    async pullUsers() {
        try {
            let response = await fetch('https://randomuser.me/api/?results=100&gender=female');
            let result = await response.json();
            let resultKeyed = []
            for (var i = 0; i < result.results.length; i++){
                result.results[i].key = result.results[i].login.username;
                resultKeyed.push(result.results[i]);
            }
            this.setState({
                allCards: resultKeyed
            });
            let selection = []
            for (var i = 0; i < 3; i++){
                selection.push(this.state.allCards.shift(i))
            }
            this.setState({
                allCards: this.state.allCards,
                displayedCards: selection.reverse()
            });
        } catch (err) {
            alert(JSON.stringify(err));
        }
    }

    handleAdd() {
        if (this.state.allCards.length > 0) {
            let newCard = this.state.allCards.shift()
            this.setState({
                displayedCards: [newCard, ...this.state.displayedCards]
            });
        }
    };

    handleRemove = (index) => {
        this.state.displayedCards.pop();
        this.setState({
            displayedCards: this.state.displayedCards
        });
        this.handleAdd();
    };

    renderCard(cardObject) {
        return(
            <View style={Styles.card}>
                <View style={Styles.cardTop}/>
                <View style={Styles.cardImageBorder}/>
                <Image source={{uri: cardObject.picture.large}} style={Styles.cardImage}/>
                <View style={Styles.cardText}>
                    <Text style={Styles.cardTextMain}>{cardObject.name.first.toUpperCase()} {cardObject.name.last.toUpperCase()}</Text>
                    <Text style={Styles.cardTextSecondary}>{cardObject.location.city.toUpperCase()} </Text>
                    <Text style={Styles.cardTextSecondary}>{cardObject.location.state.toUpperCase()}</Text>
                    <Text style={Styles.cardTextTerciary}>{cardObject.email}</Text>
                </View>
            </View>
        )
    }

    render() {
        return (
            <CardStack
                cardList={this.state.displayedCards}
                renderCard={this.renderCard}
                cardHeight={flattenStyle(Styles.card).height}
                cardWidth={flattenStyle(Styles.card).width}
                cardRotation={20}
                cardOpacity={0.5}
                onSwipeRight={this.handleRemove}
                onSwipeLeft={this.handleRemove}
                onSwipeUp={this.handleRemove}
                onSwipeDown={this.handleRemove}
                leftSwipeThreshold={-150}
                rightSwipeThreshold={150}
                upSwipeThreshold={-150}
                downSwipeThreshold={150}
            />
        );
    }
}



/*
    handleCustRsvClicked = () => {
        // TODO: ONE OF THESE ADDRESSES NEED TO BE CHANGED? (handleCustRsvClicked & handleRestoRsvClicked)
        this.props.history.push('/reservations')
    }

    handleSettingsClicked = () => {
        this.props.history.push('/settings')
    }

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
*/