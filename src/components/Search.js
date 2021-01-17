import React from "react";
import NavBar from "./Navbar";
import PokeCards from "./PokeCards"
import TeamPlanner from "./TeamPlanner";

function Search(){
    return(
        <div>
            <NavBar />

            <TeamPlanner />

            <form className="poke-search">
                <input type="text" name="search" id="search" placeholder="search" />
            </form>

            <div>
                <PokeCards />
            </div>
        </div>
    );    
}

export default Search;