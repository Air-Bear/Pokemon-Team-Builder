import React from "react";
import { useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import PokeCard from "../simple/PokeCard";
import DetailedCard from "../simple/DetailedCard";

const useStyles = makeStyles(() => ({
    root: {
        display: "flex"
    }
}))

function PokemonEdit(){
    const location = useLocation();
    const classes = useStyles();
    const { pokemon } = location.state;

    return(
        <div className={classes.root}>
            <DetailedCard pokemon={pokemon} />
        </div>
    );
}

export default PokemonEdit;