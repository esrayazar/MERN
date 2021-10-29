const mongoose = require("mongoose");
const JokesSchema = new mongoose.Schema({
    punchline:{
        type: String,
        required:[true,"We need a punchline."]

    },
    setup:{
        type: String,
        required:[true, "We need a setup."],
        minlength:[3,"You should write minimum 3 character."]
    }




},{timestamps:true})

const Jokes = mongoose.model("Joke", JokesSchema)
module.exports = Jokes

