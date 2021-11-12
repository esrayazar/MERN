const  mongoose  = require("mongoose")

const MusicianSchema = new mongoose.Schema({

    name: {
        type: String,
        required:[true, "An musician name is required!"],
        minlength:[3,"An musician name must be at least 3 characters long"]
    },
    image: {
        type: String,
        required:[true, "Musician image is required"]
    },
    genre:{
        type: String,
        required:[true, "Musician needs a genre!"],
        enum:[
            "Rock",
            "Rap",
            "Blues",
            "Jazz",
            "Soul",
            "Country",
            "Classical",
            "Bachata",
            "Metal",
            "Polka",
            "Punk"
        ]
    },

    yearFormed:{
        type:Number
    },

    rating:{
        type:Number,
        max: [10, "No more than 10 for a rating"]
    },

    suitableForKids:{
        type: Boolean
    }

},{timestamps:true})


const Musician = mongoose.model("Musician", MusicianSchema);
module.exports = Musician