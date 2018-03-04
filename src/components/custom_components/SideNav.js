import React from 'react';

const SideNav = props => {
    return (
        <div className="sidenav">
            <a href="#">Home</a>
            <a href="#">Liked Restaurants</a>
            <a href="#">Profile</a>
            <a id="signout-sidenav">Sign out </a>
        </div>
    )
};

export default SideNav;
