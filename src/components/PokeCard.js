import React from "react";
import logo from "../logo.jpg";

function PokeCard(){
    return(
        <div className="poke-card">
            <div className="poke-icon">
                <img src={logo} alt="" />
            </div>
            <h4>Name</h4>
        </div>
        
    )
}

export default PokeCard