import React from "react";
import { Typography, makeStyles } from "@material-ui/core";
import TypesBadge from "../basic/TypesBadge";

const useStyles = makeStyles(theme => ({
    types_div: {
        margin: "0 auto",
        display: "flex",
        justifyContent: "center"
    }
}))

function TypesContainer({ pokemon }){
    const classes = useStyles();
    
    return(
        <div className={classes.types_div}>
            {pokemon.types.map((type, i) => (
                <TypesBadge key={type.type.name} type={type} bgColor={pokemon.bgColors[i]} />
            ))}
        </div>
    )
}

export default TypesContainer;