//Constantes
// const express = require("express");

import express from "express"; // las dos son las mismas maneras de importar pero escritas de forma diferente. 
import { loadBackend } from "./src/back/index.js"; 

const app = express();
const PORT = process.env.PORT || 16078;

app.use(express.json());
app.use("/", express.static("./public"));

loadBackend(app);

app.listen(PORT,() =>{
    console.log(`Server running on port ${PORT}!`);
});