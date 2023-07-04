require('dotenv').config();
const express = require('express');
const app = express();
//const { MongoClient } = require('mongodb');
// Connection URL
//const url = 'mongodb://localhost:27017';
//const client = new MongoClient(url);

/*const Datastore = require('nedb');
const database = new Datastore("database.db");*/

const PORT = process.env.PORT || 7701;
app.use(express.static('public'));
app.use(express.json());

console.log("process.argv:", process.argv[0]);
console.log("process.argv:", process.argv[1]);
console.log("process.env.port:", process.env.port);
console.log("process.cwd:", process.cwd());
console.log("process.pid:", process.pid);
console.log("process.platform:", process.platform);
console.log("process.env.API_KEY:", process.env.API_KEY);
console.log("process.env.NODE_ENV:", process.env.NODE_ENV);

console.log("process.env.SUPER_USER:", process.env.SUPER_USER);

app.post("/backend/api", async (req, res)=>{
	res.json({message:"Hello Chaupi"}) ;
});

app.listen(PORT, ()=>{
   console.log("listening on port", PORT) ;
});