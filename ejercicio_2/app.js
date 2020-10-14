
const obtenerChiste = require("./library");


obtenerChiste().then((chiste) => {
    console.log(chiste[0].setup);
  return chiste[0];
}).then((chiste)=>{
    console.log(chiste.punchline);

})
.catch((err) => {
    console.log('error');
})
