const express = require("express"); //initializing
const { json } = require("express"); //To be ablo read and see data in JSON format...
const itemsRoutes = require("./src/router/routes");
const connect = require("./src/config/dataBase"); //connecting to the dataBase
connect(); //calling the connect function to enable connection to local or hosted DB.
// A local Data Base wa used for this project


const PORT = process.env.PORT || 3000; //acquiring port from .env files

const app = express(); //instantiating
app.use(json()); // Enable parsing of json objects in body of request
app.use("/tasks", itemsRoutes); //Defining a middle-ware, a path to display todo items/create/update/delete

app.get("/", (req, res) => {
  res.send("<h1>Chukwuezi, Precious</h1> \n Zuri Training on mongoDB. \n Navigate to \"/tasks\" page to see Available Todo Tasks.");
});

app.listen(PORT, () => console.log(`Serving on port ${PORT}.`));
