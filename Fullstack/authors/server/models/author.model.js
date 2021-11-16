const  mongoose  = require("mongoose")

const AuthorSchema = new mongoose.Schema({

    author: {
        type: String,
        required:[true, "An author name is required!"],
        minlength:[3,"An author name must be at least 3 characters long"]


    },
},{timestamps:true})

  

const Author = mongoose.model("Author", AuthorSchema);
module.exports = Author

