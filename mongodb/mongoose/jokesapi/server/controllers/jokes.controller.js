const Jokes = require('../models/jokes.model.js');

//all jokes
module.exports.findAllJokes = (req, res) => {
    Jokes.find()
        .then((allJokes) => {
            res.json({ results: allJokes })
        })
        .catch((err) => {
            res.status(400).json()
        });
}

//one joke
module.exports.findOneSingleJoke = (req, res) => {
    Jokes.findOne({ _id: req.params.id })
        .then(one => {
            res.json({ results: one })
        })
        .catch((err) => {
            res.status(400).json()
        });
}


//create joke
module.exports.createNewjoke = (req, res) => {
    Jokes.create(req.body)
        .then(Joke => {
            res.json({ results: Joke })
        })
        .catch((err) => {
            res.status(400).json()
        });
}

//update joke
module.exports.updateExistingjoke = (req, res) => {
    Jokes.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedjoke => {
            res.json({ results: updatedjoke })
        })
        .catch((err) => {
            res.status(400).json()
        });
}

//delete joke
module.exports.deleteAnExistingjoke = (req, res) => {
    Jokes.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.status(400).json()
        });
}

//random joke
module.exports.randomizedJoke = (re,res) => {
    Jokes.aggregate([{$sample:{size:1}}])
        .then(randomJoke => {
            res.json({results: randomJoke})
        })
        .cath((err) => {
            res.status(400).json()
        })
}