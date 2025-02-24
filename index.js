//Constantes
const express = require("express");
const app = express();
const PORT = process.env.PORT || 16078;
const cool = require("cool-ascii-faces");
//Codigo
app.get("/",(request, response) => {
    response.send("Hi Server!");
});


app.get("/",(request, response) => {
    response.send("Love u Sarita la brauni");
});
app.listen(PORT,() =>{
    console.log(`Server running on port ${PORT}!`);
});

console.log(`Finish setup`);