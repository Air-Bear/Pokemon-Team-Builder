import React, { useState } from "react";
import NavBar from "../basic/NavBar";
import SearchBar from "../basic/SearchBar";
import SearchResults from "../basic/SearchResults";

function PokeSearch(){
    const [team, setTeam] = useState({
        size: 6,
        name: "Team",
        members: []
    });



    return(
        <>
            <NavBar />
            <SearchBar team={team} />
            <SearchResults team={team} setTeam={setTeam} />
        </>
    );
};

export default PokeSearch;