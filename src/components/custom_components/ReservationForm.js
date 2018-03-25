import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input, Label } from 'reactstrap';
import { Button, Modal } from 'react-bootstrap';

import DateTimePicker from 'react-widgets/lib/DateTimePicker';
import 'react-widgets/dist/css/react-widgets.css';
import momentLocalizer from 'react-widgets-moment';

// import { }

momentLocalizer();

export default class ReservationForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            numberOfPeople: 0,
            dateTime: new Date()
        }
    }

    handleSubmit = () => {
        const postData = {
            datetime: this.state.dateTime,
            num_people: this.state.numberOfPeople
        }


    };

    render() {
        console.log(this.state.dateTime);
        return (
            <Modal show={this.props.show} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>New Reservation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Label for="numberOfPeople">Number of People</Label>
                    <Input
                        name="numberOfPeopl"
                        value={this.state.numberOfPeople}
                        onChange={e => this.setState({ numberOfPeople: e.target.value })}
                    />

                    <Label for="dateTime">Date & Time</Label>
                    <DateTimePicker
                        name="dateTime"
                        value={this.state.dateTime}
                        max={new Date()}
                        onChange={value => {this.setState({ dateTime: value })}}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

ReservationForm.propTypes = {
    show: PropTypes.bool,
    handleClose: PropTypes.func,
    handleShow: PropTypes.func
};

ReservationForm.defaultProps = {
    show: false
};
