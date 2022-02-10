const express = require("express");
const app = express();
require("dotenv").config();

const mongoose = require("mongoose");
const cors = require("cors");

const Port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Server Connected on Port 3000");
});

mongoose.connect( process.env.URL , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
    }).then (() => { console.log("Connected to MongoDB")});

//app.use ('/', )
//app.use ('/',)

app.listen(process.env.PORT, () => {
  console.log("Server started on port 4000");
});