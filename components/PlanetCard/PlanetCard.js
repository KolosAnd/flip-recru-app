import React from "react";
import mainClass from "./PlanetCard.module.css";
import Link from 'next/link'


const PlanetCard = (card) => {
    let cardLinkIndex = card.card.url.slice(30);
    cardLinkIndex = cardLinkIndex.slice(0, -1);
    return (
        <Link href={`planets/${cardLinkIndex}`}  >
            <a className={mainClass.planet_card}>
                <h2 className={mainClass.planet_card_name}>
                {card.card.name}
                </h2>
            </a>
            
        </Link>
    )
}
export default PlanetCard;