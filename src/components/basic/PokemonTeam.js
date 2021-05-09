import React, { useState } from "react";
import { makeStyles, Avatar, Typography } from "@material-ui/core";
import PopoverList from "./PopoverList";
import pokeball from "../../icons8-pokeball-48.png";

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
    },
    pokeCard: {
        width: "5rem",
        height: "5rem",
        [theme.breakpoints.up("sm")]: {
            width: "6.3rem",
            height: "6.3rem"
        }
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
                <div className={classes.former}>
                    {team.map((pokemon, i) => (
                        i < 3 ?
                            <div className={classes.pokeCard}>
                                <Avatar className={classes.pokeImg} src={pokemon ? pokemon.img : pokeball} />
                                <Typography>
                                    {pokemon ? pokemon.name : null}    
                                </Typography>   
                            </div>
                        : null
                    ))}
                </div>
                <div className={classes.latter}>
                    {team.map((pokemon, i) => (
                        i > 2 ?
                            <div className={classes.pokeCard}>
                                <Avatar className={classes.pokeImg} src={pokemon ? pokemon.img : pokeball} />
                                <Typography>
                                    {pokemon ? pokemon.name : null}    
                                </Typography>   
                            </div>
                        : null
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PokemonTeam;