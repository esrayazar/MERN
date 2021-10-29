const JokeController = require("../controllers/jokes.controllers")


module.exports = (app)=>{
    app.get("/api/jokes",JokeController.findAllJokes);
    app.post("/api/jokes",JokeController.createNewJoke);
    app.get("/api/jokes/:id",JokeController.findOneJoke);
    app.put("/api/jokes/:id",JokeController.updateJokes)
    app.delete("/api/jokes/:id",JokeController.deleteJoke)
}