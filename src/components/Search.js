import React from "react";
import NavBar from "./Navbar";
import PokeCards from "./PokeCards"

function Search(){
    return(
        <div>
            <NavBar />

            <form className="formGroup">
                <input type="text" name="search" id="search" placeholder="search" />
            </form>

            <div>
                <PokeCards />
            </div>
        </div>
    );    
}

export default Search;