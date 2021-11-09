
const PlayerController = require("../controllers/player.controller");

module.exports =(app) =>{
    app.get("/api/players", PlayerController.findAllPlayers);
    app.post("/api/players", PlayerController.createPlayer);
    app.get("/api/player/:id", PlayerController.findOnePlayer);
    app.put("/api/player/:id", PlayerController.updatePlayer);
    app.delete("/api/player/:id", PlayerController.deletePlayer);
}