//(function (exports, require, module, __filename, __dirname) {});
const express = require('express');
const app = express();
const config = require('./config/index');
const logger = require('./util/logger');

const mongoose = require('mongoose');
// mongoose.Promise = global.Promise;
mongoose.connect(config.db.url);
if (config.seed) {
    require('./create-data');
}


// setup the global middleware
const globalMiddleware = require('./middleware/applicationMiddleware');
globalMiddleware(app);


// api router
const api = require('./api');
const auth = require('./auth/route');
// setup the api
app.use('/api', api);
app.use('/auth', auth);


// public resource
app.use('/',     express.static(__dirname + '/../public'));
app.use('/icon', express.static(__dirname + '/../public/icon'));
app.use('/dist', express.static(__dirname + '/../dist'));


// error handler
app.use((err, req, res) => {
    if (err.name === 'UnauthorizedError') {
        res.status(401).send('Invalid token');
        return;
    }

    logger.log(err);
    res.status(err.status || 500).send({message: err.message});
});

module.exports = app;