// tracking http requests
const morgan = require('morgan');

// parse http request body
const bodyParser = require('body-parser');

// lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.
const override = require('method-override');

// setup global middleware here
module.exports = function (app) {
    app.use(morgan('dev'));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(override());
};