import React, { useState } from "react";
import { makeStyles, Avatar, Typography } from "@material-ui/core";
import PopoverList from "./PopoverList";
import pokeball from "../../icons8-pokeball-48.png";

const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        justifyContent: "space-around"
    },
    teamSection: {
        display: "flex"
    },
    pokeCard: {
        width: "10%"
    },
    pokeImg: {
        width: "100%",
        height: "100%"
    }
}));

function PokemonTeam({team}){
    const classes = useStyles();
    

    return(
        <div className={classes.root}>
            <PopoverList />
            <div className={classes.teamSection}>
                {team.map(pokemon => (
                    <div className={classes.pokeCard}>
                        <Avatar className={classes.pokeImg} src={pokemon ? pokemon.img : pokeball} />
                        <Typography>
                            {pokemon ? pokemon.name : null}    
                        </Typography>   
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PokemonTeam;