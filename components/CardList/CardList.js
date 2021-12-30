import React, {useEffect} from "react";
import PlanetCard from "../PlanetCard/PlanetCard";
import mainClass from "./CardList.module.css";

const CardList = ({cards}) => {

    return (
        <section className={mainClass.planet_block}>
            <div className="container">
                <h2 className={mainClass.planet_block_title}>
                    Star Wars Planets
                </h2>
                <div className={mainClass.planets_block_wrap}>
                    {
                        cards &&  cards.length > 0 ?
                            cards.map( (card) =>
                            <PlanetCard card={card} key={card.id}/>
                        )
                        : <h2>Planets not found</h2>
                    }
                </div>
            </div>
        </section>
    )
}

export default CardList;