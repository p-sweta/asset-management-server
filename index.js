const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World!");
  });
  
  

const mongoose = require("mongoose");

const  connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true});
        app.listen(PORT, () => {
            console.log(`Running on port ${PORT}`);
          });
    } catch (err) {
        console.log(err);
    } 
} 

connectDB();
