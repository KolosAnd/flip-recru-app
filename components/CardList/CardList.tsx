import React, {FC, useEffect} from "react";
import ListCard from "../ListCard/ListCard";
import mainClass from "./CardList.module.css";
import {IPlanet} from "../../types/Planet";

interface CardListProps {
    cards: IPlanet[]
    title: string
}


const CardList:FC<CardListProps> = ({cards, title}) => {
    return (
        <section className={mainClass.planet_block}>
            <div className="container">
                <h2 className={mainClass.planet_block_title}>
                    {title}
                </h2>
                <div className={mainClass.planets_block_wrap}>
                    {
                        cards &&  cards.length > 0 ?
                            cards.map( (card) =>
                            <ListCard card={card} key={card.name}/>
                        )
                        : <h2>Items not found</h2>
                    }
                </div>
            </div>
        </section>
    )
}

export default CardList;