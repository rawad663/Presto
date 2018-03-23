import React from 'react';
import PropTypes from 'prop-types';
import default_pic from '../../resources/images/_text.png';

import NavBar from '../custom_components/NavBar';
import SideNav from '../custom_components/SideNav';
import LineBreak from '../custom_components/LineBreak';

const ProfileComponent = props => {
    const items = [
        { name: 'Home', route: '/customer' },
        { name: 'Liked Restaurants', route: '/customer/liked' },
        { name: 'Reservations', route: '/customer/reservations' }
    ];

    const styles = {
        img: {
            width: 150,
            height: 150,
            margin: 15,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 50%',
            backgroundImage: `url("${props.imgUrl ? props.imgUrl : default_pic}")`
        },
        fullName: {
            fontWeight: 'lighter'
        },
        username: {
            fontWeight: 'lighter',
            color: '#616161',
            marginTop: -8,
            fontSize: 16
        },
        value: {
            fontWeight: 'lighter',
            fontSize: 16
        }

    };

    const { user, description, resto_name, address, postal_code, phone_number } = props.loggedInUser;

    return (
        <div>
            <NavBar fullName={props.loggedInUser !== null
                ? `${props.loggedInUser.user.first_name} ${props.loggedInUser.user.last_name}`
                : 'Fustat Fargin'}/>
            <SideNav items={items} route={props.route} />

            <div style={{ marginLeft: 200, maxWidth: '100%' }}>
                <div style={{ display: 'flex' }}>
                    <div style={styles.img} />
                    <div >
                        <h1 style={styles.fullName}>{`${user.first_name} ${user.last_name}`}</h1>
                        <p style={styles.username}>{user.email}</p>
                    </div>
                </div>

               <LineBreak />

                {user.is_resto
                && <div style={{ marginLeft: '5%', width: '70%' }}>
                    <h4>Restaurant Name: <span style={styles.value}>{resto_name}</span></h4>
                    <h4>
                        Description: <span style={styles.value}>{description}</span>
                    </h4>
                    <br />
                    <h4>Address: <span style={styles.value}>{`${address}, ${postal_code}`}</span></h4>
                    <h4>Phone Number: <span style={styles.value}>{phone_number}</span></h4>
                </div>}
            </div>
        </div>
    );
};

export default ProfileComponent;