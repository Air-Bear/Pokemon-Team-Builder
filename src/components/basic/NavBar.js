import React from "react";
import { AppBar, Toolbar, IconButton, Typography, makeStyles } from "@material-ui/core";
import { Menu, AccountCircle } from "@material-ui/icons";
import Logo from "./Logo";

const useStyles = makeStyles(() => ({
    root: {
        position: "static"
    },
    nav: {
        justifyContent: "space-between"
    },
}))

function NavBar(){
    const classes = useStyles();

    return(
        <AppBar className={classes.root}>
            <Toolbar className={classes.nav}>
                <IconButton>
                    <AccountCircle />
                </IconButton>
                <Typography variant="h6">
                    PokeTeam
                </Typography>
                <IconButton>
                    <Menu />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;