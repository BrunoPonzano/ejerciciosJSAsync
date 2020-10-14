const obtenerPersonaFake = require("./library");


function funcionCallback(persona){
    console.log('nombre: ' + persona.results[0].name.title +'.' + persona.results[0].name.first + " "+persona.results[0].name.last);
    console.log('localidad: ' + persona.results[0].location.street.number + " " +persona.results[0].location.street.name);

}

obtenerPersonaFake(funcionCallback);
