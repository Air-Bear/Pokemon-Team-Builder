const storage = require("./storage.js");

let cache = function(data){
    data.forEach(pokemon => {
        storage.pokemon ? storage.pokemon.push(pokemon.data) : storage.pokemon = [pokemon.data]
    });
}

module.exports = cache;