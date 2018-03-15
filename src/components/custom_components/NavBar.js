import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { purple_dark, purple_main } from '../../resources/colors';
import { withRouter } from 'react-router';

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
                    <Button onClick={() => props.history.push('/customer/profile')} style={styles.button}>Profile</Button>
                    <Button onClick={() => props.history.push('/customer/settings')} style={styles.button}>Settings</Button>
                </div>
            </div>
            <p style={styles.space}>nothing here</p>
            {props.children}
        </div>
    );
};

NavBar.propTypes = {
    fullName: PropTypes.string
};

NavBar.defaultProps = {
    fullName: 'Lebron James'
};

// withRouter connects the component to react-router
// gives access to the path, history, etc...
export default withRouter(NavBar);
