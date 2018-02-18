import React from 'react';
import {purple_main} from "../../resources/colors";

const CustomerHomeComponent = props => {

    const styles = {
        title: {
            color: purple_main
        }
    };
    return (
        <div style={styles.title}>
            Customer Home Component
        </div>
    );
};

CustomerHomeComponent.propsTypes = {


};

export default CustomerHomeComponent;