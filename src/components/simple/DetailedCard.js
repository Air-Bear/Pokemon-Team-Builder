import React from "react";
import { Avatar, Typography, makeStyles } from "@material-ui/core";
import TypesContainer from "./TypesContainer";

const useStyles = makeStyles(theme => ({
    root: {
        margin: "3rem",
        width: "30%",
        border: "1px solid black"
    },
    avatar: {
        margin: "0 auto",
        width: "200px",
        height: "200px"
    },
    moves_div: {
        display: "flex",
        flexWrap: "wrap"
    },
    moves_card: {
        
        border: "1px solid black",
        width: "49%",
        borderRadius: "5px"
    },
    abilities_div: {
        margin: "0 auto",
        display: "flex"
    },
    abilities_card: {
        margin: "0 auto"
    },
    stats_div: {
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "space-around"
    }
}))

function DetailedCard({ pokemon }){
    const classes = useStyles();
    console.log(pokemon)

    return(
        <div className={`${classes.root} ${pokemon.name}-card`}>
            <Avatar src={pokemon.sprites.front_default} className={classes.avatar} />
            <TypesContainer pokemon={pokemon} />
            <div className={classes.abilities_div}>
                {pokemon.abilities.map((ability, i) => (
                    <Typography className={classes.abilities_card} key={i}>
                        {ability.ability.name}
                    </Typography>
                ))}
            </div>
            <div className={classes.moves_div}>
            {pokemon.moveset.map((move, i) => (
                    <div className={classes.moves_card} key={i}>
                        <Typography>
                            {move.name}                    
                        </Typography>
                    </div>
                ))}
            </div>
            <div className={classes.stats_div}>
                {pokemon.stats.map((stat) => (
                    <div className={`${classes.stats_div} ${stat}`}>
                        <Typography>
                            {stat.stat.name}:
                        </Typography>
                        <Typography>
                            {stat.base_stat}
                        </Typography>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DetailedCard;