const MusicianController = require("../controllers/musician.controller");

module.exports =(app)=>{
    app.get("/api/musicians", MusicianController.getAllMusicians);
    app.post("/api/musicians", MusicianController.createMusician);
    app.get("/api/musicians/:id", MusicianController.getOneMusician);
    app.put("/api/musicians/:id", MusicianController.updateMusician);
    app.delete("/api/musicians/:id", MusicianController.deleteMusician);
}