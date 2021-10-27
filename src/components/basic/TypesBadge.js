import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    types_card: {
        width: "25%",
        margin: "0 0.25rem",
        border: "1px solid black",
        borderRadius: "5px",
        background: color => {
            return color
        }
    }
}));

function TypesBadge({ type, bgColor }){
    const classes = useStyles([bgColor]);

    return(
        <Typography className={classes.types_card}>
            {type.type.name}
        </Typography>
    );
}

export default TypesBadge;