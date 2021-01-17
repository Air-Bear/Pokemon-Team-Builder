import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Planner from "./Planner.js";


function TeamPlanner(){
    return(
        <div className="planner-parent">
            <div className="expand-btn">
                <FontAwesomeIcon icon={faAngleRight} size="3x" />
            </div>
            <div className="poke-team">
               <Planner /> 
            </div>
        </div>
    )
}

export default TeamPlanner
