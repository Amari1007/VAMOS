require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 7701;
app.use(express.static('public'));
app.use(express.json());

app.post("/backend/api", async (req, res)=>{
	res.json({message:"Hello Chaupi"}) ;
});

app.listen(PORT, ()=>{
   console.log("listening on port", PORT) ;
});
