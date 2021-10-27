import React from "react";
import { makeStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import PopoverList from "../basic/PopoverList";
import PokeCard from "./PokeCard";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "space-around",
        width: "100%"
    },
    teamSection: {
        display: "flex",
        flexDirection: "column",
        width: "80%",
        flexWrap: "wrap",
        [theme.breakpoints.up("sm")]: {
            flexDirection: "row",
        }
    },
    former: {
        display: "flex",
        justifyContent: "space-around",
        [theme.breakpoints.up("sm")]: {
            width: "50%",
        }
    },
    latter: {
        display: "flex",
        
        justifyContent: "space-around",
        [theme.breakpoints.up("sm")]: {
            width: "50%",
        }
    }
}));

function createTeam(team, setTeam){
    var teamCards = [];
    for(var i = 0; i < team.size; i++){
        teamCards.push(<PokeCard index={i} key={i} pokemon={team.members[i] ? team.members[i] : {bgColors: [grey[500]]}} team={team} setTeam={setTeam} />)
    }
    return teamCards;
}

function PokemonTeam({team, setTeam}){
    const classes = useStyles();

    var teamElements = createTeam(team, setTeam);

    return(
        <div className={classes.root}>
            <PopoverList />
            <div className={classes.teamSection}>
                <div className={classes.former}>
                    {teamElements.map((pokemon, i) => (
                        i <= (team.size/2)-1 ? 
                        pokemon
                        : null
                    ))}
                </div>
                <div className={classes.latter}>
                    {teamElements.map((pokemon, i) => (
                        i > (team.size/2)-1 ?
                        pokemon
                        : null
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PokemonTeam;