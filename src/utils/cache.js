const storage = require("./storage.js");
const pokemon_colors = require("../theme/pokemonColors");

let cache = function(data){
    data.forEach(pokemon => {
        let bgColors = []

        pokemon.data.types.forEach(typeObj => {
            bgColors.push(pokemon_colors[typeObj.type.name])
        })
        pokemon.data.bgColors = bgColors;
        storage.pokemon ? storage.pokemon.push(pokemon.data) : storage.pokemon = [pokemon.data]
    });
}

module.exports = cache;