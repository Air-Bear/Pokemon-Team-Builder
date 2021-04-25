import React from "react";
import { Paper, InputBase, TextField, IconButton, makeStyles } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import PokemonTeam from "./PokemonTeam";

const useStyles = makeStyles(() => ({
    root:{
        margin: "1rem auto",
        width: "60%",
        backgroundColor: "grey"
    },
    field: {
        width: "70%"
    },
}));

function SearchBar({ team }){
    const classes = useStyles();

    return(
        <Paper component="div" className={classes.root}>
            <PokemonTeam team={team} />
            <form>
                <TextField className={classes.field} />
                <IconButton type="submit">
                    <Search  />
                </IconButton>
            </form>
        </Paper>
    );
}

export default SearchBar;