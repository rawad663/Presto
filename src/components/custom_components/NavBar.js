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
            marginBottom: 65
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
                    <Button style={styles.button}>Liked Restaurants</Button>
                    <Button style={styles.button}>Reservations</Button>
                </div>
            </div>
            <p style={styles.space}>nothing here</p>
        </div>
    );
};

NavBar.propTypes = {
    fullName: PropTypes.string
};

NavBar.defaultProps = {
    fullName: 'Lebron James'
};

export default NavBar