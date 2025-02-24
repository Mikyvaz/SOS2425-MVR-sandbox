//Constantes
const express = require("express");
const app = express();
const PORT = 16078;
const cool = require("cool-ascii-faces");
//Codigo
app.get("/",(request, response) => {
    response.send("Hi Server!");
});
app.get("/cool",(request, response) => {
    response.send(cool());
});

app.listen(PORT,() =>{
    console.log(`Server running on port ${PORT}!`);
});

console.log(`Finish setup`);