import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import { Menu, AccountCircle } from "@material-ui/icons";
import Logo from "./Logo";

function NavBar(){
    return(
        <AppBar>
            <Toolbar>
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