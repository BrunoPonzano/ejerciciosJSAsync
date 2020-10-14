
const obtenerPokemon = require("./library");



function funcionCallback(pokemon){
    console.log('Nombre: ' + pokemon.name);
    console.log('Habilidad: '+pokemon.abilities[0].ability.name);
    console.log('Altura: '+pokemon.height);
    console.log()
}



obtenerPokemon('pidgeot', funcionCallback);
