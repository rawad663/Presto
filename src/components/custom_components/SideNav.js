import React from 'react';
import PropTypes from 'prop-types';
import { purple_main } from "../../resources/colors";
import { withRouter } from 'react-router';

const SideNav = props => {
    const renderItems = items => items.map(item => (
            <a
                key={item.name}
                onClick={() => { props.history.push(item.route) }}
                style={{ backgroundColor: props.route === item.route && purple_main, cursor: 'pointer' }}
            >
                {item.name}
            </a>
        )
    );

    return (
        <div className="sidenav">
            <div style={{ marginTop: 50 }}>
                {renderItems(props.items)}
            </div>
            <a onClick={() => { props.history.push('/'); delete localStorage.loggedInUser;}} id="signout-sidenav">Sign out </a>
        </div>
    )
};

SideNav.propTypes = {
    items: PropTypes.array,
    route: PropTypes.string
};

export default withRouter(SideNav);
