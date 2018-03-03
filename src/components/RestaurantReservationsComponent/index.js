import React from 'react';
import {purple_main} from "../../resources/colors";
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap';
import PropTypes from "prop-types";
import NavBar from '../custom_components/NavBar';
import {routes, aGet} from "../../api/api";


const RestaurantReservationsComponent = props => {

    const styles = {
        title: {
            color: purple_main
        },
        buttonAccept:{
            backgroundColor:'green',
            color: 'white',
            width: 100
        },
        buttonDecline:{
            backgroundColor:'red',
            color:'white',
            width: 100
        }

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
            let reservation = data.results;
            return reservation.map(function(reservation) {
                let li = createNode('li'),
                    img = createNode('img'),
                    span = createNode('span');
                img.src = reservation.picture.medium;
                span.innerHTML = `${reservation.name.last}`;
                append(li, span);
                append(ul, li);
            })
        })
        .catch(function(error) {
            console.log(error);
        });



        return(

        <div>
            <div>
                <NavBar fullName="Rawad Karam"/>
                <h2 style={{ margin: '40px auto' }} className="mainTitle"> Pending Reservations </h2>

            </div>

            <div style={{ display: 'inline' }}>


                <Button
                    onClick={props.handleAccept}
                    style={{ ...styles.buttonAccept, }}
                >
                    Accept
                </Button>

                <Button
                    onClick={props.handleDecline}
                    style={{ ...styles.buttonDecline, marginLeft: 8 }}
                >
                    Decline
                </Button>
            </div>
        </div>




    )


};

RestaurantReservationsComponent.propsTypes = {
    handleAccept: PropTypes.func,
    handleDecline: PropTypes.func,

};

export default RestaurantReservationsComponent;