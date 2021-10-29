const JokeController = require("../controllers/jokes.controllers")


module.exports = (app)=>{
    app.get("/api/jokes",JokeController.findAllJokes)
    app.post("/api/jokes",JokeController.createNewJoke)
    app.put("/api/jokes",JokeController.updateJokes)
    



}