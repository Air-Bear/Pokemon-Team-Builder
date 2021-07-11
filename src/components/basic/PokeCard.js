import React from "react";
import { makeStyles, Avatar, Typography } from "@material-ui/core";
import pokeball from "../../icons8-pokeball-48.png";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: "15px 1%",
        background: "white",
        borderRadius: "100%",
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

function PokeCard({pokemon}){
    const classes = useStyles();

    return(
    <div className={classes.root}>
        <Avatar className={classes.pokeImg} src={pokemon ? pokemon.sprites.front_default : pokeball} />
        <Typography>
            {pokemon ? pokemon.name : null}    
        </Typography>   
    </div>);
};

export default PokeCard;