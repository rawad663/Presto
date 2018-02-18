import React from 'react';
import {purple_main} from "../../resources/colors";
import PropTypes from 'prop-types';
import {Button} from 'reactstrap';
import {Well} from 'react-bootstrap';

const CustomerHomeComponent = props => {

    const styles = {
        title: {
            color: purple_main
        }
    };
    return (
        <div>
            <Well>
                <div style={styles.title}>
                    Customer Home Component
                </div>
                <Button
                    onClick={props.handleCustRsvClicked}
                    style={{ ...styles.button, width: 170 }}
                    type="submit"
                >
                    Customer Reservations
                </Button>

                <Button
                    onClick={props.handleRestoRsvClicked}
                    style={{ ...styles.button, width: 170 }}
                    type="submit"
                >
                    Restaurant Reservations
                </Button>

                <Button
                    onClick={props.handleSettingsClicked}
                    style={{ ...styles.button, width: 170 }}
                    type="submit"
                >
                    Settings
                </Button>
            </Well>
        </div>



    );
};

CustomerHomeComponent.propsTypes = {
    handleCustRsvClicked: PropTypes.func,
    handleRestoRsvClicked: PropTypes.func,
    handleSettingsClicked: PropTypes.func


};

export default CustomerHomeComponent;