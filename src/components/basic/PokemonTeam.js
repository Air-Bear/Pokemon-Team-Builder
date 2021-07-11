import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import PopoverList from "./PopoverList";
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

function PokemonTeam({team}){
    const classes = useStyles();
    

    return(
        <div className={classes.root}>
            <PopoverList />
            <div className={classes.teamSection}>
                <div className={classes.former}>
                    {team.map((pokemon, i) => (
                        i < 3 ?
                        <PokeCard pokemon={pokemon} />
                        : null
                    ))}
                </div>
                <div className={classes.latter}>
                    {team.map((pokemon, i) => (
                        i > 2 ?
                        <PokeCard pokemon={pokemon} />
                        : null
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PokemonTeam;