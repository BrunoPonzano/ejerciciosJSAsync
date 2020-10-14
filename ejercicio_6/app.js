
const obtenerPersonaFake = require("./library");


obtenerPersonaFake('persona').then((persona)=>{
console.log('Nombre: '+ persona.results[0].name.title + "."+ persona.results[0].name.first+" "+ persona.results[0].name.last);
return persona;
}).then(persona => {
    console.log('Localidad: ' + persona.results[0].location.street.number + " " + persona.results[0].location.street.name);
}).catch(err => {
    console.log(err);
});
