import React from "react";
import PokeCard from "./PokeCard";

function Planner(){
    var pokemon = [1,1,1,1,1,1];
    return(
        <>
            {pokemon.map(pokemon => (
                <PokeCard />
            ))}
        </>
    );
}

export default Planner;