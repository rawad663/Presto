import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input, Label } from 'reactstrap';
import { Button, Modal } from 'react-bootstrap';

import DateTimePicker from 'react-widgets/lib/DateTimePicker';
import 'react-widgets/dist/css/react-widgets.css';
import momentLocalizer from 'react-widgets-moment';

import {aPost, aGet, routes } from "../../api/api";

momentLocalizer();

export default class ReservationForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            numberOfPeople: 0,
            dateTime: new Date(),
            resto: '',
            restaurantList: []
        }
    }

    componentDidMount() {
        if (localStorage.loggedInUser !== undefined) {
            const loggedInUser = JSON.parse(localStorage.loggedInUser);
            if(loggedInUser.liked_restos.length >= 0){
                this.setState({ restaurantList: loggedInUser.liked_restos });
            }
        }
    }

    handleSubmit = () => {
        const postData = {
            datetime: this.state.dateTime,
            num_people: this.state.numberOfPeople
        };

        const loggedInUser = localStorage.loggedInUser !== undefined && JSON.parse(localStorage.loggedInUser);

        console.log(loggedInUser)
        if (loggedInUser !== null && loggedInUser.user.is_resto === false) {
            aPost(routes.createReservation(loggedInUser.user.id, this.state.resto), postData).then(response => {
                console.log(response.data);
            }).catch(err => {
                console.log(err);
            })
        }

    };

    renderRestoList = list => list.map((resto, i) => <option value={resto.user.id} key={i}>{resto.resto_name}</option>);

    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>New Reservation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Label for="numberOfPeople">Restaurant</Label>
                    <Input
                        value={this.state.resto}
                        onChange={e => this.setState({ resto: e.target.value })}
                        style={{ marginBottom: 5 }}
                        type="select" name="select"
                        id="exampleSelect"
                    >
                        <option value="" key="default"> </option>
                        {this.renderRestoList(this.state.restaurantList)}
                    </Input>

                    <Label for="numberOfPeople">Number of People</Label>
                    <Input
                        style={{ marginBottom: 5 }}
                        name="numberOfPeopl"
                        value={this.state.numberOfPeople}
                        onChange={e => this.setState({ numberOfPeople: e.target.value })}
                    />

                    <Label for="dateTime">Date & Time</Label>
                    <DateTimePicker
                        style={{ marginBottom: 5 }}
                        name="dateTime"
                        value={this.state.dateTime}
                        onChange={value => {this.setState({ dateTime: value })}}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button bsStyle="primary" onClick={this.handleSubmit}>Reserve</Button>
                    <Button onClick={this.props.handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

ReservationForm.propTypes = {
    show: PropTypes.bool,
    handleClose: PropTypes.func,
    handleShow: PropTypes.func,
    customerId: PropTypes.string,
    restoId: PropTypes.string
};

ReservationForm.defaultProps = {
    show: false
};
