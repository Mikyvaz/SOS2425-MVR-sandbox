const express = require("express");

const app = express();
const PORT = 16078;
app.get("/",(request, response) => {
    response.send("Hello from the server!");
})

app.listen(PORT,() =>{
    console.log(`Server running on port ${PORT}!`);
});

console.log(`Finish setup`);