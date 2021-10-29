const Jokes = require("../models/jokes.model")


module.exports = {
    findAllJokes:(req, res)=>{
        Jokes.find({})
            .then((allJokes)=>{
                console.log(allJokes);
                res.json(allJokes)
            })
            .catch((err)=>{
                res.json({message: "Something went wrong in findAllJokes", error: err})
            })

    },
    findOneJoke: (req, res)=>{
        Jokes.findOne({_id:req.params.id})
            .then((oneJoke)=>{
                console.log(oneJoke);
                res.json(oneJoke)
            })
            .catch((err)=>{
                console.log("Find one musician falled")
                res.json({message: "Something went wrong in findOneJoke", error: err})

            })



    },

    createNewJoke: (req, res)=>{
        Jokes.create(req.body)
            .then((newJoke)=>{
                console.log(newJoke);
                res.json(newJoke);
            })
            .catch((err)=>{
                console.log("Something went wrong in create")
                res.status(400).json(err)
            })


    },

    updateJokes: (req, res)=>{
        Jokes.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new:true, runValidators:true}
        )
        .then((updateJokes)=>{
            console.log(updateJoke);
                res.json(updateJoke);

        })
    }




}