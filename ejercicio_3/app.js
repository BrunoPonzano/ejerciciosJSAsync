const obtenerPokemon = require("./library");



function funcionCallback(pokemon){
    console.log('Nombre: ' + pokemon.name);
    console.log('Habilidades: '+pokemon.abilities[0].ability.name +" & "+  pokemon.abilities[1 ].ability.name);
    console.log('Altura: '+pokemon.height);
    console.log()
}



obtenerPokemon('pidgeot', funcionCallback);
