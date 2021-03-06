import React from 'react';
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

    // load user from localStorage
    const user = (localStorage.loggedInUser !== undefined && localStorage.loggedInUser !== null)
                        ? JSON.parse(localStorage.loggedInUser).user
                        : {
                            first_name: 'Example',
                            last_name: 'Name',
                            email: 'example@example.com',
                            username: 'example@example.com',
                            is_resto: false
                        };

    return (
        <div>
            <div id="nav-bar" style={styles.navBar}>
                <h4 style={styles.title}>Presto - {`${user.first_name} ${user.last_name}`}</h4>
                <div>
                    <Button onClick={() => props.history.push(!user.is_resto ? '/customer/profile' : '/restaurant/profile')} style={styles.button}>Profile</Button>
                    <Button onClick={() => { props.history.push('/'); delete localStorage.loggedInUser; delete localStorage.token}} style={styles.button}>Sign Out</Button>
                </div>
            </div>
            <p style={styles.space}>nothing here</p>
            {props.children}
        </div>
    );
};

// withRouter connects the component to react-router
// gives access to the path, history, etc...
export default withRouter(NavBar);
