const express = require("express");
const mongoose = require("mongoose")
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true}));



app.listen(8000, () =>{
    console.log("The server connected on port 8000")
})

