const Author = require("../models/author.model");


module.exports = {
    getAllAuthors:(req, res)=>{
        Author.find({})
        .then((allAuthors)=>res.json(allAuthors))
        .catch((err)=>res.status(400).json(err))
    },

    getOneAuthor: (req, res)=>{
        Author.findById({_id: req.params.id})
        .then((oneAuthor)=>res.json(oneAuthor))
        .catch((err)=>res.status(400).json(err))
    },

    createAuthor: (req, res)=>{
        Author.create(req.body)
        .then((newAuthor)=>res.json({newAuthor}))
        .catch((err)=>res.status(400).json(err))

    },

    updateAuthor: (req, res)=>{
        Author.findByIdAndUpdate(
            {_id:req.params.id},
            req.body,
            {
                new:true,
                runValidators:true
            })
        .then((updatedAuthor)=>res.json(updatedAuthor))
        .catch((err)=>res.status(400).json(err))

    },
    deleteAuthor:(req, res)=>{
        Author.deleteOne({_id: req.params.id})
        .then((deletedId)=>res.json(deletedId))
        .catch((err)=>res.status(400).json(err))

    }
}
