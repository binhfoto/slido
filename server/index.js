//(function (exports, require, module, __filename, __dirname) {});

const express = require('express');
const app = express();
const config = require('./config/index');
const logger = require('./util/logger');
const mongoose = require('mongoose');

/*
cd home/new-path/project/slido/
cd /Users/binhnguyen/home/new-path/tool/mongodb-osx-x86_64-3.2.11/bin
./mongod --dbpath data/db
*/
/*mongoose.Promise = global.Promise;
mongoose.connect(config.db.url);
if (config.seed) {
    require('./create-data');
}*/


// setup the global middleware
var globalMiddleware = require('./middleware/applicationMiddleware');
globalMiddleware(app);
/*


// api router
var api = require('./api');
var auth = require('./auth/route');
// setup the api
app.use('/api', api);
app.use('/auth', auth);

*/

// public resource
app.use('/', express.static(__dirname + '/../public'));
app.use('/icon', express.static(__dirname + '/../public/icon'));
app.use('/dist', express.static(__dirname + '/../dist'));


// error handler
app.use(function (err, req, res) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).send('Invalid token');
        return;
    }

    logger.log(err);
    res.status(err.status || 500).send({message: err.message});
});

/*app.get('/', function (req, res) {
    res.send('hello world')
});*/

module.exports = app;