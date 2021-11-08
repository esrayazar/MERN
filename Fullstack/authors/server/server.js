const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(cors({
    origin: "http://localhost:3000"
}))


require("./config/mongoose.config");
require("./routes/author.routes")(app);

app.listen(8000, () =>console.log("The server connected on port 8000"))
