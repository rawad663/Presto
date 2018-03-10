import React from 'react';
import PropTypes from 'prop-types';
import turkishFood from '../../resources/images/turkish-food.jpg'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import Ratings from 'react-ratings-declarative';

const RestaurantCard = props => {
    const styles = {
        container:{

        },
        text: {
            marginLeft: 5,
        },
        img: {
            borderRadius: 3,
            width: '100%',
            height: 'auto'
        },
        infoBlock: {
            paddingTop: 7,
            paddingBottom: 7
        }
    };

    return (
        <div style={props.style}>
            <Card>
                <CardImg width = "100%" src={turkishFood} />
                <CardBody>
                    <CardTitle className="card-title" style={styles.text}>
                        {props.restaurantName}
                    </CardTitle>
                    <CardSubtitle className="card-subtitle">
                        {props.address}
                    </CardSubtitle>
                    <Ratings rating={props.restaurantRating}>
                        <Ratings.Widget/>
                        <Ratings.Widget/>
                        <Ratings.Widget/>
                        <Ratings.Widget/>
                        <Ratings.Widget/>


                    </Ratings>

                    <CardText>
                        {props.postalCode}
                    </CardText>

                </CardBody>

            </Card>
        </div>



        // <div style={styles.container} class = "container-fluid" className="card">
        //     <img style={styles.img} src={buffet} />
        //     <h3 style={{ ...styles.text, color: purple_main, fontWeight: 60 }}>{props.restaurantName}</h3>
        //     <div style={styles.infoBlock}>
        //         <p className="card-info" style={styles.text}>{props.address}, {props.postalCode}</p>
        //         <p className="card-info" style={styles.text}>{props.phoneNumber}</p>
        //         <p className="card-info" style={styles.text}>{props.email}</p>
        //     </div>
        // </div>
    )
};

RestaurantCard.propTypes = {
    id: PropTypes.string,
    restaurantName: PropTypes.string,
    restaurantRating: PropTypes.string,
    address: PropTypes.string,
    postalCode: PropTypes.string,
    phoneNumber: PropTypes.string,
    email: PropTypes.string,
    style: PropTypes.object
};

RestaurantCard.defaultProps = {
    restaurantName: 'Kral Doner',
    restaurantRating: 3.5,
    address: 'Susurluk, Balikesir',
    phoneNumber: '+90-266-862-2615',
    postalCode: '10600',
    email: 'example@example.com',
    style: {}
};

export default RestaurantCard;