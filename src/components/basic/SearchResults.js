import React, { useEffect, useState} from "react";
import { makeStyles } from "@material-ui/core";
import axios from "axios";
import PokeCard from "./PokeCard";
import cache from "../../utils/cache";
import storage from "../../utils/storage";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        [theme.breakpoints.up("sm")]: {
            margin: "0 5%"    
        }
        
    }
}));

function SearchResults(){
    const classes = useStyles();

    let promises = [];
    const [pokemon, setPokemon] = useState([])

    useEffect(()=>{
        let url = "https://pokeapi.co/api/v2/pokemon?limit=40";

        if(storage.pokemon){
            setPokemon(storage.pokemon)
        } else {
        axios.get(url)
        .then(res => {
            res.data.results.map(pokemon => {
                promises.push(axios.get(pokemon.url))
            })
            Promise.all(promises)
            .then(res => {
                cache(res)
                setPokemon(storage.pokemon)
                console.log("from the network")
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
    }, []);

    return(
        <div className={classes.root}>
            {pokemon.map(pokemon => (
                <PokeCard pokemon={pokemon} />
            ))}
            
        </div>
    );
}

export default SearchResults;