const  mongoose  = require("mongoose")

const ProductSchema = new mongoose.Schema({

    title: {
        type: String,
    },

    price:{
        type: Number,
    },
    description:{
        type: String,
        required: (true, "You need to add description"),
        minlength:[5, "Needs to be at least 5 characters" ]
    },
    reviews:[{
        content: String,
        rating: Number,
        yourName: String
    }]
}, {timestamps:true})

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product


