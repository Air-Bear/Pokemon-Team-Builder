import React, { useState, useEffect } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import PokeAvatar from "./PokeAvatar";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: "15px 1%",
        borderRadius: "100%",
        width: "5rem",
        height: "5rem",
        [theme.breakpoints.up("sm")]: {
            width: "6.3rem",
            height: "6.3rem"
        }
    }
}));

function PokeCard({team, setTeam, pokemon, ...props}){
    const [bgColor, setBgColor] = useState();
    const classes = useStyles();

    const clickHandler = (pokemon) => {
        if(team.members.length < team.size){
            setTeam({
                ...team,
                members: [...team.members,
                pokemon
                ] 
            })
        }
    }

    useEffect(() => {
        setBgColor(pokemon.bgColors)
    }, [pokemon])

    return(
    <div className={pokemon.name ? `${classes.root} ${pokemon.name}` : classes.root} onClick={props.result ? () => clickHandler(pokemon) : null} >
        <PokeAvatar index={props.index} pokemon={pokemon} bgColor={bgColor} team={team} setTeam={setTeam} result={props.result} />
        <Typography>
            {pokemon ? pokemon.name : null}    
        </Typography>   
    </div>);
};

export default PokeCard;