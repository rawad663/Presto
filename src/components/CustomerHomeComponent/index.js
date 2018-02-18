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
                    style={{ ...styles.button, width: 150 }}
                    type="submit"
                >
                    Customer Reservations
                </Button>

            </Well>
        </div>



    );
};

CustomerHomeComponent.propsTypes = {
    handleCustRsvClicked: PropTypes.func


};

export default CustomerHomeComponent;