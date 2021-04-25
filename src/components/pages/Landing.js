import React from "react";
import { Container, ButtonGroup } from "@material-ui/core";
import Login from "../basic/Login";
import Register from "../basic/Register";

function Landing(){
    return(
        <Container>
            <ButtonGroup>
                <Login />
                <Register />
            </ButtonGroup>
        </Container>
    );
};

export default Landing;