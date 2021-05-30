const express = require('express');

const UsersController = require('./controllers/UsersController');


const routes = express.Router();

// Rota base, apenas para verificar se está funcionando
routes.get('/', (req, res) => {
    return res.json({
        message: "It's Work!"
    });    
});


// [HTTP:POST] -> http://localhost:3333/users

// users
routes.get('/users', UsersController.index);
routes.post('/users', UsersController.store);
routes.get('/users/:id', UsersController.getUsers);
// routes.delete('/users/:id', UsersController.deleteUsers);



module.exports = routes;