const  mongoose  = require("mongoose")

const ProductSchema = new. mongoose.Schema({

    title: {
        type: String,
        required:(true, "Title is required!")
    },

    price:{
        type: Number,
        required:(true, "Price is required!")

    },
    description:{
        type: String,
        required: (true, "You need to add description")
    }
    

}, {timestamps:true})

const Product = mongoose.model("Product", ProductSchema)
module.exports = Product


