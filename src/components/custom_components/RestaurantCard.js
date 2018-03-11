import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Row, Col} from 'reactstrap';
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
        <div style={props.style} className="card-info">
            <Card>
                <CardImg width = "100%" src={props.imgUrl} />
                <CardBody>
                    <CardTitle className="card-title" style={styles.text}>
                        {props.restaurantName}
                    </CardTitle>

                    <Row style={styles.row}>
                        <Col sm={{ size: 6, offset: 1 }}>
                            <CardSubtitle className="card-subtitle">
                                {props.address}
                            </CardSubtitle>

                        </Col>
                        <Col sm={{ size: 6, offset: 1 }}>
                            <CardSubtitle className="card-subtitle">
                                {props.postalCode}
                            </CardSubtitle>
                        </Col>
                    </Row>

                    <Ratings rating={props.restaurantRating} widgetDimensions="32px">
                        <Ratings.Widget/>
                        <Ratings.Widget/>
                        <Ratings.Widget/>
                        <Ratings.Widget/>
                        <Ratings.Widget/>
                    </Ratings>

                </CardBody>
            </Card>
        </div>
    )
};

RestaurantCard.propTypes = {
    id: PropTypes.string,
    imgUrl: PropTypes.string,
    restaurantName: PropTypes.string,
    restaurantRating: PropTypes.number,
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