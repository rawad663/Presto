import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardBody, CardTitle, CardSubtitle, CardText, Button} from 'reactstrap';
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
            justifyContent: 'space-around',
            // flexWrap: 'wrap',
        },
        rating: {

        }

    };

    const filterDescription = desc => {
        if (desc.length>100){
            return desc.substring(0,100) + '...';
        } else return desc;
    };

    return (
        <div id={props.id} style={props.style} className={"card-info " + props.className}>
            <Card>
                <div style={styles.img}/>
                <CardBody style={{paddingBottom:"1px"}}>
                    <div style={styles.row}>
                        <CardTitle className="card-title" >
                            {props.restaurantName}
                        </CardTitle>
                        <div className="address">
                            <CardSubtitle className="card-subtitle">
                                {props.address}
                            </CardSubtitle>
                            <CardSubtitle className="card-subtitle">
                                {props.postalCode}
                            </CardSubtitle>
                        </div>



                    </div>
                    <div className="ratings" >
                        <Ratings rating={props.restaurantRating} widgetDimensions="25px" widgetSpacings="1px">
                            <Ratings.Widget/>
                            <Ratings.Widget/>
                            <Ratings.Widget/>
                            <Ratings.Widget/>
                            <Ratings.Widget/>
                        </Ratings>
                    </div>
                    <CardText style={{marginBottom:'10px', fontSize: 17, padding:'10px'}}>
                        {filterDescription(props.description)}
                    </CardText>

                    {/*Conditional Rendering for reserve button for LIKED RESTAURANTS Component (still hasnt been done)*/}
                    {props.likedRestos &&
                    <div style={{margin:"5px"}}>

                        <Button
                            onClick={props.handleReserve}
                            style={{ width:"100%", backgroundColor:"#E1BEE7", color:"white", fontSize:"20px"}}
                        >
                            Reserve
                        </Button>
                    </div>
                    }


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
    style: PropTypes.object,
    handleReserve: PropTypes.func,
    likedRestos: PropTypes.bool.isRequired
};

RestaurantCard.defaultProps = {
    restaurantName: 'Kral Doner',
    restaurantRating: 3.5,
    address: 'Susurluk, Balikesir',
    phoneNumber: '+90-266-862-2615',
    description: 'The best Kebab within a 82 km radius.  Come enjoy breakfast lunch or dinner with fresh Doner and Turkish tea.',
    postalCode: '10600',
    email: 'example@example.com',
    style: {},
    likedRestos:false
};

export default RestaurantCard;