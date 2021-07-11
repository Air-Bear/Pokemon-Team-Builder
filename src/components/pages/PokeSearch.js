import React, { useState, useEffect } from "react";
import NavBar from "../basic/NavBar";
import SearchBar from "../basic/SearchBar";
import SearchResults from "../basic/SearchResults";

function PokeSearch(){
    const [team, setTeam] = useState([{
        name: "bulbasaur",
        sprites: {
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
        }
    }, null, null, null, null, null]);



    return(
        <>
            <NavBar />
            <SearchBar team={team} />
            <SearchResults />
        </>
    );
};

export default PokeSearch;