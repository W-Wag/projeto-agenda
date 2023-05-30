const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const cadastroController = require('./src/controllers/cadastroController');
const contatoController = require('./src/controllers/contatoController');

const { loginRequired } = require('./src/middlewares/middleware')

//Home Routes
route.get('/', homeController.index);

// Rotas de cadastro e login
route.get('/cadastrar', cadastroController.index);
route.post('/login/register', cadastroController.register);

route.get('/login', loginController.index);
route.post('/login/logar', loginController.login);
route.get('/login/logout', loginController.logout);

// Rotas de contato
route.get('/contato', loginRequired, contatoController.index );
route.post('/contato/register', loginRequired, contatoController.register);
route.get('/contato/index/:id([0-9a-f]{24})', loginRequired, contatoController.editIndex);
route.post('/contato/edit/:id([0-9a-f]{24})', loginRequired, contatoController.edit);
route.get('/contato/delete/:id([0-9a-f]{24})', loginRequired, contatoController.delete);

module.exports = route;