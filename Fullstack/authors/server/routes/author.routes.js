const AuthorController = require("../controllers/author.controller");

module.exports =(app)=>{
    app.get("/api/authors", AuthorController.getAllAuthors);
    app.post("/api/authors", AuthorController.createAuthor);
    app.get("/api/authors/:id", AuthorController.getOneAuthor);
    app.put("/api/authors/:id", AuthorController.updateAuthor);
    app.delete("/api/authors/:id", AuthorController.deleteAuthor);
}