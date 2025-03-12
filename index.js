//Constantes
const express = require("express");
const app = express();
const PORT = process.env.PORT || 16078;
const cool = require("cool-ascii-faces");
//Codigo
app.get("/",(request, response) => {
    response.send("Love u Sarita la brauni!!");
});
app.get("/guay", (request, response) =>{
    response.send(`Vamos a ver que pasa si pongo esto así.`)
})

app.get("/",(request, response) => {
    response.send("Love u Sarita la brauni");
});
app.listen(PORT,() =>{
    console.log(`Server running on port ${PORT}!`);
});

console.log(`Love u Sarita la brauni`);