const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const server = express();
const bodyParser = require('body-parser')


const place = require("./routes/place.js"); 
const connectDB = require("./dbconnexion.js");


const app = express();
app.use(bodyParser.json({limit: '150mb'}));
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
limit: '150mb',
extended: true
})); 
 

app.use(cors());

if (process.env.NODE_ENV==='devlopment') {
  app.use(morgan)
}
const PORT = process.env.PORT || 5000;

connectDB();
app.listen(PORT,console.log(
  `Server running  on port ${PORT}`
)

)
app.use('/place', place);

