const mongoose = require("mongoose")

 const PlayerSchema = new mongoose.Schema({

    teamName:{
        type: String,
        
    },

    preferredPosition:{
        type: String,

    },
    action:{
        type:String
    }

 },{timestamps:true})

 const Player = mongoose.model("Player",PlayerSchema);

 module.exports = Player;