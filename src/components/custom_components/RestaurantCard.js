import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';
import Ratings from 'react-ratings-declarative';

const RestaurantCard = props => {
    const styles = {
        img:{
            height:'200px',
            width:'100%',
            backgroundSize: 'cover',
            backgroundRepeat:'no-repeat',
            backgroundPosition:'center',
            backgroundImage:`url("${props.imgUrl}")`
        },

        row: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
        }

    };

    const filterDescription = desc => {
        if (desc.length>140){
            return desc.substring(0,135) + '...';
        } else return desc;
    };

    return (
        <div id={props.id} style={props.style} className={"card-info " + props.className}>
            <Card>
                <div style={styles.img}/>
                <CardBody>
                    <div style={styles.row}>
                        <CardTitle className="card-title" >
                            {props.restaurantName}
                        </CardTitle>
                        <Ratings rating={props.restaurantRating} widgetDimensions="20px" widgetSpacings="1px">
                            <Ratings.Widget/>
                            <Ratings.Widget/>
                            <Ratings.Widget/>
                            <Ratings.Widget/>
                            <Ratings.Widget/>
                        </Ratings>
                    </div>


                    <div style={styles.row}>
                        <CardSubtitle className="card-subtitle">
                            {props.address}
                        </CardSubtitle>
                        <CardSubtitle className="card-subtitle">
                            {props.postalCode}
                        </CardSubtitle>
                    </div>
                    <CardText style={{marginLeft:'5px', marginBottom:'5px'}}>
                        {filterDescription(props.description)}
                    </CardText>


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
    description: PropTypes.string,
    phoneNumber: PropTypes.string,
    email: PropTypes.string,
    style: PropTypes.object
};

RestaurantCard.defaultProps = {
    restaurantName: 'Kral Doner',
    restaurantRating: 3.5,
    address: 'Susurluk, Balikesir',
    phoneNumber: '+90-266-862-2615',
    description: 'The best Kebab within a 82 km radius.  Come enjoy breakfast lunch or dinner with fresh Doner and Turkish tea.',
    postalCode: '10600',
    email: 'example@example.com',
    style: {}
};

export default RestaurantCard;