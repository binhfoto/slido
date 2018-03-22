const route = require('express').Router();
const verifyUser = require('./auth').verifyUser;
const controller = require('./controller');

// before we send back a jwt, lets check the password and username match what is in DB
route.post('/signin', verifyUser(), controller.signin);

module.exports = route;