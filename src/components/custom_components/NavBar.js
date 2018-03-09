import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { purple_dark, purple_main } from '../../resources/colors';

const NavBar = props => {
    const styles = {
        navBar: {
            backgroundColor: purple_dark
        },
        space: {
            marginBottom: 40
        },
        title: {
            alignSelf: 'center',
            marginLeft: 10,
            fontWeight: 'lighter',
            color: 'white',
            fontFamily: 'Helvetica'
        },
        button: {
            height: 30,
            marginTop: 15,
            marginRight: 5,
            backgroundColor: 'white',
            color: purple_main
        }
    };

    return (
        <div>
            <div id="nav-bar" style={styles.navBar}>
                <h4 style={styles.title}>Presto - {props.fullName}</h4>
                <div>
                    <Button onClick={props.button1Click} style={styles.button}>{props.button1}</Button>
                    <Button onClick={props.button2Click} style={styles.button}>{props.button2}</Button>
                </div>
            </div>
            <p style={styles.space}>nothing here</p>
            {props.children}
        </div>
    );
};

NavBar.propTypes = {
    fullName: PropTypes.string,
    button1: PropTypes.string,
    button2: PropTypes.string,
    button1Click: PropTypes.func,
    button2Click: PropTypes.func
};

NavBar.defaultProps = {
    button1: 'Button 1',
    button2: 'Button 2',
    fullName: 'Lebron James'
};

export default NavBar