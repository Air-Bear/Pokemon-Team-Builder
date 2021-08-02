import React, { useState, useEffect } from "react";
import { makeStyles, Avatar, Typography } from "@material-ui/core";
import pokeball from "../../icons8-pokeball-48.png";

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
    },
    pokemon:{
        background: color => {
            
            return color.length === 1 ? color : `linear-gradient(135deg, ${color[0]} 50%, ${color[1]} 50%)`
        },
        border: "1px black solid"
    },
    pokeImg: {
        width: "100%",
        height: "100%"
    }
}));

function PokeCard({team, setTeam, pokemon}){
    const [bgColor, setBgColor] = useState();
    const classes = useStyles(bgColor);

    const clickHandler = (pokemon) => {
        console.log("clicked", pokemon)
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
    <div className={pokemon.name ? `${classes.root} ${classes.pokemon} ${pokemon.name}` : classes.root} onClick={team ? () => clickHandler(pokemon) : null}>
        <Avatar className={classes.pokeImg} src={pokemon.sprites ? pokemon.sprites.front_default : pokeball} />
        <Typography>
            {pokemon ? pokemon.name : null}    
        </Typography>   
    </div>);
};

export default PokeCard;