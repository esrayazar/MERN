const Musician = require("../models/musician.model");


module.exports = {
    getAllMusicians:(req, res)=>{
        Musician.find({})
        .then((allMusicians)=>{
            console.log(allMusicians);
            res.json(allMusicians)
        })
        .catch((err)=>{
            console.log("Find all musicians failed");
            res.json({message: "Something went wwrong in findAllMusicians", error:err})
        })
    },

    getOneMusician: (req, res)=>{
        Musician.findById({_id: req.params.id})
        .then((oneMusician)=>{
            console.log(oneMusician);
            res.json(oneMusician)
        })
        .catch((err)=>{
            console.log("Find one  musician failed");
            res.json({ message: 'Something went wrong in findOneMusician', error: err });
        })
    },

    createMusician: (req, res)=>{
        Musician.create(req.body)
        .then((newMusician)=>{
            console.log(newMusician);
            res.json({newMusician})
        })
        .catch((err)=>{
            console.log("Something went wrong in createNewMusician");
            res.status(400).json(err)
        })

    },

    updateMusician: (req, res)=>{
        Musician.findByIdAndUpdate(
            {_id:req.params.id},
            req.body,
            {
                new:true,
                runValidators:true
            })
        .then((updatedMusician)=>{
            console.log(updatedMusician);
            res.json(updatedMusician);
        })
        .catch((err)=>{
            res.status(400).json(err);
        })

    },
    deleteMusician:(req, res)=>{
        Musician.deleteOne({_id: req.params.id})
        .then((deletedMusician)=>{
            console.log(deletedMusician);
            res.json(deletedMusician)
        })
        .catch((err)=>{
            console.log("Delete musician failed");
            res.json({ message: 'Something went wrong in deleteMusician', error: err });
        })

    },
}
