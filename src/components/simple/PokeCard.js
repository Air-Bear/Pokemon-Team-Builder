import React, { useState, useEffect, useCallback } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import PokeAvatar from "../basic/PokeAvatar";

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

const PokeCard = React.memo(({team, setTeam, pokemon, ...props})=>{
    const [bgColor, setBgColor] = useState();
    const classes = useStyles();
    if(pokemon){
        console.log("rendered ", pokemon.name)
    }

    const clickHandler = useCallback((pokemon) => {
        if(team.members.length < team.size){
            pokemon["moveset"] = [
                {name: "none"},
                {name: "none"},
                {name: "none"},
                {name: "none"}
            ]
            setTeam({
                ...team,
                members: [...team.members,
                pokemon
                ] 
            })
            console.log(pokemon)
        }
    })

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
});

export default PokeCard;