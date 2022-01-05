import React from "react";
import mainClass from "./PlanetCard.module.css";
import Link from 'next/link'


const ListCard = ({card}) => {
    let cardLinkIndex = card.url.slice(22);
    cardLinkIndex = cardLinkIndex.slice(0, -1);
    return (
        <Link href={`/${cardLinkIndex}`}  >
            <a className={mainClass.planet_card}>
                <h2 className={mainClass.planet_card_name}>
                {card.name}
                </h2>
            </a>
            
        </Link>
    )
}
export default ListCard;