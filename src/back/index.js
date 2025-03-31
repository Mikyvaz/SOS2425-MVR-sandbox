
import dataStore from "@seald-io/nedb";

const BASE_API = "/api/v1";

let db = new dataStore({ filename: "contacts.db", autoload: true });




let initialContacts = [
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

db.find({}, (err, contacts) => {
    if (err) {
        console.error("Error al buscar contactos:", err);
        return;
    }

    if (contacts.length < 1) {
        db.insert(initialContacts, (err, newDocs) => {
            if (err) {
                console.error("Error al insertar contactos iniciales:", err);
            } else {
                console.log("Contactos iniciales insertados:", newDocs);
            }
        });
    } else {
        console.log("Contactos ya presentes en la DB.");
    }
});

function loadBackend (app){
    app.get(BASE_API+"/contacts",(request,response)=>{
        console.log("New GET to /contacts");
        
        db.find({},(err,contacts)=>{
            response.send(JSON.stringify(contacts.map((c)=>{
                delete c._id; //esto sirve para que no enseñe al usuario el _id que no le importa
                return c;
            }),null,2));
        });

    });
    
    
    app.post(BASE_API+"/contacts",(request,response)=>{
    
        console.log("POST to /contacts");
        console.log(`<${request.body}>`);
    
        let newContact = request.body;
        
        db.insert(newContact);
    
        response.sendStatus(201);
    });
   
    app.delete(BASE_API+"/contacts/:name",(request,response)=>{
    
        let name = request.params.name;
        console.log(`DELETE to /contacts/${name}`);
            
        db.remove({ "name" : name},{},(err,numRemoved)=>{
            if(err){
                response.status(500).send("Error code 01 (please contact admin)");                
                console.error(`ERROR: ${err}`);
            }else{
                if(numRemoved >= 1){
                    response.sendStatus(200);
                }else{
                    response.sendStatus(404);
                }
            }
        });
    
    });
   



}



export {loadBackend}; // cuando haga un require podré utilizar estos elementos. 