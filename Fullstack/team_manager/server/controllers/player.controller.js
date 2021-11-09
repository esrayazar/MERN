const Player = require("../models/player.model")


module.exports = {
    findAllPlayers:(req, res)=>{
        Player.find({})
        .then((allPlayers)=>res.json(allPlayers))
        .catch((err)=>res.status(400).json(err))
    },

    findOnePlayer: (req, res)=>{
        Player.findById(req.params._id)
        .then((onePlayer)=>res.json(onePlayer))
        .catch((err)=>res.status(400).json(err))
    },

    createPlayer: (req, res)=>{
        Player.create(req.body)
        .then((newPlayer)=>res.json({player: newPlayer}))
        .catch((err)=>res.status(400).json(err))

    },

    updatePlayer: (req, res)=>{
        Player.findByIdAndUpdate(
            {_id:req.params._id},
            req.body,
            {
                new:true,
                runValidators:true
            })
        .then((updatedPlayer)=>res.json(updatedPlayer))
        .catch((err)=>res.status(400).json(err))

    },
    deletePlayer:(req, res)=>{
        Player.deleteOne({_id: req.params._id})
        .then((deletedId)=>res.json(deletedId))
        .catch((err)=>res.status(400).json(err))

    }
}
