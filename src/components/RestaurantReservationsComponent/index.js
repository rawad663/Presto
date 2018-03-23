import React from 'react';
import {blue,purple_main} from "../../resources/colors";
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap';
import PropTypes from "prop-types";
import NavBar from '../custom_components/NavBar';
import {routes, aGet} from "../../api/api";
import SideNav from '../custom_components/SideNav';
import { Well } from 'react-bootstrap';






const RestaurantReservationsComponent = props => {

    const styles = {

        buttonAccept:{
            backgroundColor:purple_main,
            color: 'white',
            width: 100
        },
        buttonDecline:{
            backgroundColor:'#4d79ff',
            color:'white',
            width: 100

        },
        buttonNotChosen:{
            backgroundColor:'gray',
            width: 100,
            color: '#404040'
        },

        list:{
            marginLeft:200

        },
        head:{
            marginLeft:220
        },
        row:{
            marginBottom:10,

        },



    };


    function createNode(element) {
        return document.createElement(element);
    }

    function append(parent, el) {
        return parent.appendChild(el);
    }

    const ul = document.getElementById('reservation');


    fetch(aGet(routes.RSTReservation))
        .then((resp) => resp.json())
        .then(function(data) {
            var reservation = data.results;
            return reservation.map(function(reservation) {
                let li = createNode('li'),
                    span = createNode('span');
                span.innerHTML = `${reservation.name.last}`;
                append(li, span);
                append(ul, li);
            })
        })
        .catch(function(error) {
            console.log(error);
        });

    var  res1 =  {name:'Kevin', NumberOfPpl: 3, time:Date("October 13, 2014 11:13:00")};
    var  res2 =  {name:'Rawad', NumberOfPpl: 4, time:Date("October 13, 2014 11:13:00")};




    const reservationlist = [res1,res2];

    const listItems = reservationlist.map((reservations) =>

        <Well  bsSize="small">
            <FormGroup>
                 <span style={styles.list} >{reservations.name}
                     <span style={styles.list}>{reservations.NumberOfPpl}</span>
             <span style={styles.list}>{reservations.time}</span>
            <Button
                onClick={props.handleAccept}
                style={{ ...styles.buttonAccept, }}
                id = 'acceptButton'
            >
                Accept
            </Button>

            <Button
                onClick={props.handleDecline}
                style={{ ...styles.buttonDecline, marginLeft: 8 }}
                id = 'declineButton'
            >
                Decline
            </Button>
            <br/>
            <br/>
            </span>

            </FormGroup>
        </Well>



    );


    const items = [
        { name: 'Home', route: '/customer' },
        { name: 'Liked Restaurants', route: '/customer/liked' },
        { name: 'Reservations', route: '/customer/reservations' }
    ];

    return(

        <div>
            <NavBar
                fullName={props.loggedInUser !== null
                    ? `${props.loggedInUser.user.first_name} ${props.loggedInUser.user.last_name}`
                    : 'Fustat Fargin'}
            />
            <SideNav
                items={items}
                history={props.history}
                route={props.route}
            />
            <Row>
                <Col style ={styles.head}> Name</Col>
                <Col style={styles.head}>Number of people </Col>
                <Col style={styles.head}>Date</Col>
            </Row>


            <div >

                <ul>{listItems}</ul>

            </div>
        </div>



    );


};

RestaurantReservationsComponent.propsTypes = {
    handleAccept: PropTypes.func,
    handleDecline: PropTypes.func,
    history: PropTypes.object,
    route: PropTypes.string,
    loggedInUser: PropTypes.object

};

export default RestaurantReservationsComponent;