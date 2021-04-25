import React, { useState } from "react";
import NavBar from "../basic/NavBar";
import SearchBar from "../basic/SearchBar";
import pokeball from "../../icons8-pokeball-48.png";

function PokeSearch(){
    const [team, setTeam] = useState([null, null, null, null, null, null]);
    return(
        <>
            <NavBar />
            <SearchBar team={team} />
        </>
    );
};

export default PokeSearch;