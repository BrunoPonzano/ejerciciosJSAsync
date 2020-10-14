
const obtenerChiste = require("./library");


obtenerChiste('pidgeot').then((pokemon)=>{
console.log("Nombre: "+ pokemon.name);
return pokemon;

}).then((pokemon)=>{
    console.log("Habilidad: "+pokemon.abilities[0].ability.name);
}).catch((err) =>{
    console.log(err);
});
