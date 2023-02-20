const JokesController = require('../controllers/jokes.controller.js');

module.exports = app => {
    app.get('/api/jokes', JokesController.findAllJokes);
    app.get('/api/jokes/:id', JokesController.findOneSingleJoke);
    app.put('/api/jokes/update/:id', JokesController.updateExistingjoke);
    app.post('/api/jokes/new', JokesController.createNewjoke);
    app.delete('/api/jokes/delete/:id', JokesController.deleteAnExistingjoke);
}