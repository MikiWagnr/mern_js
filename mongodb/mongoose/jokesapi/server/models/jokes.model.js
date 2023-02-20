const mongoose = require('mongoose');

const JokesSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, 'setup is required'],
        minlength: [1, 'must be at least one character long']
    },
    punchline: {
        type: String,
        required: [true, 'punchline is required'],
        minlength: [1, 'must be at least one character long']
    }
}, {timestamps: true});

const Jokes = mongoose.model('Jokes', JokesSchema);

module.exports = Jokes;