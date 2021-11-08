const  mongoose  = require("mongoose")

const AuthorSchema = new mongoose.Schema({

    Author: {
        type: String

    },
},{timestamps:true})

//     price:{
//         type: Number,
//     },
//     description:{
//         type: String,
//         required: (true, "You need to add description"),
//         minlength:[5, "Needs to be at least 5 characters" ]
//     },
//     reviews:[{
//         content: String,
//         rating: Number,
//         yourName: String
//     }]
// }, {timestamps:true})

const Author = mongoose.model("Author", AuthorSchema);
module.exports = Author

