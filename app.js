const express = require('express');
const app = express();
//const { MongoClient } = require('mongodb');
// Connection URL
//const url = 'mongodb://localhost:27017';
//const client = new MongoClient(url);

/*const Datastore = require('nedb');
const database = new Datastore("database.db");*/

const PORT = process.env.PORT || 3001;
app.use(express.static('public'));
app.use(express.json());

app.post("/backend/api", async (req, res)=>{
	res.json({message:"Hello Chaupi"}) ;
});

app.listen(PORT, ()=>{
   console.log("listening on port", PORT) ;
});