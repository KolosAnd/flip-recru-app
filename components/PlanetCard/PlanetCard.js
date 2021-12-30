import React from "react";
import mainClass from "./PlanetCard.module.css";
import {Link} from "react-router-dom";


const PlanetCard = (card) => {
    let cardLinkIndex = card.card.url.slice(30);
    cardLinkIndex = cardLinkIndex.slice(0, -1);
    return (
        <Link to={`planets/${cardLinkIndex}`}  className={mainClass.planet_card}>
            <h2 className={mainClass.planet_card_name}>
                {card.card.name}
            </h2>
        </Link>
    )
}
export default PlanetCard;