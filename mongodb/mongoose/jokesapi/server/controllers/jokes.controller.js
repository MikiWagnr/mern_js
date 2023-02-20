const Jokes = require('../models/jokes.model.js');

module.exports.findAllJokes = (req, res) => {
    Jokes.find()
        .then((allJokes) => {
            res.json({ results: allJokes })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.findOneSingleJoke = (req, res) => {
    Jokes.findOne({ _id: req.params.id })
        .then(one => {
            res.json({ results: one })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.createNewjoke = (req, res) => {
    Jokes.create(req.body)
        .then(Joke => {
            res.json({ results: Joke })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

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
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.deleteAnExistingjoke = (req, res) => {
    Jokes.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.randomizedJoke = (re,res) => {
    Jokes.aggregate([{$sample:{size:1}}])
        .then(randomJoke => {
            res.json({results: randomJoke})
        })
        .cath((err) => {
            re.json({message : 'Something went wrong'}, err)
        })
}