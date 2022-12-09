import React from "react";
import CardItem from "./CardItem";
import "../styles/Cards.css"

function Cards(){
    return(
        <div className="cards">
            <h1> Lorem Ipsum </h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src="../assets/food2.png" text=" This is text " label=" This is label " path="/favourites"/> {/* ITEM MOET AANGEPAST WORDEN AAN API */}
                    </ul>
                </div>
            </div>
        </div>

    );
}

export default Cards;