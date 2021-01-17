import React from "react";
import PokeCard from "./PokeCard.js";

function PokeCards(props){
    var arr = [1,1,1,1,1,1,1];
    return(
        <div className="results-div">
            {
                arr.map(arr => (
                    <PokeCard />
                ))
            }
        </div>
    );
}

export default PokeCards;