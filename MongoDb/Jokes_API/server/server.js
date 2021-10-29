const express =require("express")
const cors =require("cors");
const app =express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use(cors({
    origin: "http://localhost:3000"
}))

require("./config/mongoose.config");
require("./routes/jokes.routes")(app);

app.listen(8000,()=> console.log("you are connected at port 8000"))