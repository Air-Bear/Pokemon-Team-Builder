import React, { useState } from "react";
import NavBar from "../basic/NavBar";
import SearchBar from "../simple/SearchBar";
import SearchResults from "../simple/SearchResults";

function PokeSearch(){
    const [team, setTeam] = useState({
        size: 6,
        name: "Team",
        members: []
    });



    return(
        <>
            <NavBar />
            <SearchBar team={team} setTeam={setTeam} />
            <SearchResults team={team} setTeam={setTeam} />
        </>
    );
};

export default PokeSearch;