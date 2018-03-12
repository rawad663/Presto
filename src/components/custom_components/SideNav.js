import React from 'react';
import PropTypes from 'prop-types';
import { purple_main } from "../../resources/colors";

const SideNav = props => {
    const renderItems = items => items.map(item => (
            <a
                onClick={() => { props.history.push(item.route) }}
                style={{ backgroundColor: props.route === item.route && purple_main, cursor: 'pointer' }}
            >
                {item.name}
            </a>
        )
    );

    return (
        <div className="sidenav">
            {renderItems(props.items)}
            <a onClick={() => { props.history.push('/'); localStorage.loggedInUser = null; }} id="signout-sidenav">Sign out </a>
        </div>
    )
};

SideNav.propTypes = {
    items: PropTypes.array,
    history: PropTypes.object,
    route: PropTypes.string
};

export default SideNav;
