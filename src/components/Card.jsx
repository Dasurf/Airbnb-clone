import React from "react";
import "../styles/Card.css";
import star from "/images/Star.png";


const Card = (props) => {
    console.log(props);
    let badgeText;
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (props.location === "Online") {
        badgeText = "ONLINE";
    }
    return (
        <div className="card">
            <div className="card-image">
                <img src={`/images/${props.coverImg}`} alt="katie_image" className="katie" />
                {badgeText && <div className="card-badge">{badgeText}</div>}
            </div>
            <div className="card-bottom">
                <div className="rating-container">
                    <img src={star} alt="star icon" className="star" />
                    <p className="rating-texts">
                        <span className="rating"> {props.stats.rating} </span> 
                        (<span className="review-count">{props.stats.reviewCount}</span>) • 
                        <span className="location"> {props.location} </span>
                    </p>
                </div>
                <div className="card-texts">
                    <p className="title">{props.title}</p>
                    <p><strong>From $<span className="price">{props.price}</span></strong> / Person</p>
                </div>
            </div>
        </div>
    )
}

export default Card;