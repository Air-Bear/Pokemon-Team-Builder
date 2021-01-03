import React from "react";
import logo from "../logo.jpg";

function PokeCard(props){
    return(
        <div>
            <div className="poke-icon">
                <img src={logo} alt="" />
            </div>
        </div>
    );
}

export default PokeCard;