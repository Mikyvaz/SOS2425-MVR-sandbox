//Constantes
const express = require("express");
const app = express();
const PORT = process.env.PORT || 16078;
const cool = require("cool-ascii-faces");
const BASE_API = "/api/v1";
app.use("/", express.static("./public"));
app.use(express.json());

let contacts = [
    {
        name: "peter",
        phone: 123456
    },
    {
        name: "pablo",
        phone: 789102
    },
    {
        name: "sara",
        phone: 5873420
    }
]

//Codigo
app.get("/",(request, response) => {
    response.send("Love u Sarita la brauni!!");
});
app.get(BASE_API + "/contacts",(request, response) => {
    console.log("Llamando al GET to /contacts");
    response.send(JSON.stringify(contacts));
});

app.post(BASE_API + "/contacts",(request, response) => {
    console.log("Llamando al POST to /contacts");
    //console.log(`<${request.body}>`)
    let newContact = request.body;
    
    contacts.push(newContact);
    response.sendStatus(201);

});

app.use("/guay", express.static("./html/index.html"))
app.listen(PORT,() =>{
    console.log(`Server running on port ${PORT}!`);
});



console.log(`Inicializando servidor... `);