const express = require('express');
const app = express();
const { MongoClient } = require('mongodb');
// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

/*const Datastore = require('nedb');
const database = new Datastore("database.db");*/

const PORT = 7707;

app.use(express.static('public'));
app.use(express.json());

app.post("/backend/api", async (req, res)=>{
   
});

app.listen(PORT, ()=>{
   console.log("listening on port", PORT) ;
});