import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles, Avatar } from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import { red, grey } from "@material-ui/core/colors";
import pokeball from "../../icons8-pokeball-48.png";

const useStyles = makeStyles(theme => ({
    pokemon:{
        background: color => {
            return color.length === 1 ? color : `linear-gradient(135deg, ${color[0]} 50%, ${color[1]} 50%)`
        },
        border: "1px black solid"
    },
    pokeImg: {
        width: "100%",
        height: "100%"
    },
    overlay: {
        position: "absolute",
        zIndex: "1500",
        height: "5rem",
        [theme.breakpoints.up("sm")]: {
            height: "6.3rem"
        }
    },
    iconSpan: {
        width: "50%",
        height: "5rem"
    },
    icons: {
        width: "50%",
        height: "100%"
    },
    red: {
        backgroundColor: red[500]
    },
    grey: {
        backgroundColor: grey[500]
    }
}))


const editMember = (pokeId) => {};

function PokeAvatar({ pokemon, bgColor, team , setTeam, ...props}){
    const classes = useStyles(bgColor);
    const [style, setStyle] = useState({display: "none"});

    const deleteMember = (index) => {
        let deleted = team.members.splice(index, 1)
        setTeam({
            ...team,
            members: team.members
        })
    };
    
    const mouseEnter = event => {
        setStyle({display: "inline-block"})
    };
    const mouseLeave = event => {
        setStyle({display: "none"})
    };

    return(
        <Avatar className={`${classes.pokeImg} ${classes.pokemon}`} onMouseEnter={!props.result&&pokemon.id ? mouseEnter : null} onMouseLeave={mouseLeave} >
            <img src={pokemon.sprites ? pokemon.sprites.front_default : pokeball} alt={pokemon.name ? `${pokemon.name} sprite` : "picture of pokeball"} />
            <div className={classes.overlay}>
                <Delete className={`${classes.icons} ${classes.red}`} style={style} onClick={() => deleteMember(props.index)} />
                <Link
                to={{
                    pathname: `/team/${props.index+1}/edit`,
                    state: {
                        pokemon: pokemon
                    }
                }}
                >
                    <Edit className={`${classes.icons} ${classes.grey}`} style={style} />    
                </Link> 
            </div>
        </Avatar>
    );
}

export default PokeAvatar;