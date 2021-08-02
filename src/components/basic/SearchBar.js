import React from "react";
import { Paper, TextField, IconButton, makeStyles, Typography } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import PokemonTeam from "./PokemonTeam";

const useStyles = makeStyles((theme) => ({
    root:{
        margin: "1rem auto",
        width: "100%",
        backgroundColor: "grey",
        [theme.breakpoints.up("lg")]: {
            width: "80%"
        }
    },
    field: {
        width: "70%"
    },
}));

function SearchBar({ team }){
    const classes = useStyles();

    return(
        <Paper component="div" className={classes.root}>
            <Typography>
                {team.name}
            </Typography>
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