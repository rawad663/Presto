import React from 'react';
import {purple_main} from "../../resources/colors";

const SettingsComponent = props => {

    const styles = {
        title: {
            color: purple_main
        }
    };
    return (
        <div style={styles.title}>
            Settings Component
        </div>
    );
};

SettingsComponent.propsTypes = {


};

export default SettingsComponent;