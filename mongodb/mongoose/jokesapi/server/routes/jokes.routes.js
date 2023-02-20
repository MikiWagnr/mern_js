const JokesController = require('../controllers/jokes.controller.js');

module.exports = app => {
    //all jokes
    app.get('/api/jokes', JokesController.findAllJokes);
    //random jokes
    app.get('/api/jokes/random', JokesController.randomizedJoke)
    //one specific joke
    app.get('/api/jokes/:id', JokesController.findOneSingleJoke);
    //update joke
    app.put('/api/jokes/update/:id', JokesController.updateExistingjoke);
    //create joke
    app.post('/api/jokes/new', JokesController.createNewjoke);
    //delete joke
    app.delete('/api/jokes/delete/:id', JokesController.deleteAnExistingjoke);
}