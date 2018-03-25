const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

const config = require('./../config');
const User = require('./../api/user/model');

// middleware that validates JsonWebTokens and sets req.user
const checkToken = expressJwt({secret: config.secrets.jwt});

module.exports.verifyUser = () => (req, res, next) => {
    const {username, password} = req.body;

    // if no username and password then stop
    if (!username || !password) {
        res.status(400).send('You need a username and password');
    }

    // look user up in the DB so we can check if the password matches to the user
    User.findOne({username})
        .then(user => {
            if (!user) {
                res.status(401).send('No user with the given username');
            } else {
                if (!user.authenticate(password)) {
                    res.status(401).send('Wrong password');
                } else {
                    req.user = user;
                    next();
                }
            }
        }, next);
};

module.exports.decodeToken = () => (req, res, next) => {

    // must have white space after
    const jwtValue = 'Bearer ';

    //double check, first check in route.js
    if (config.auth === false) next();

    // make it optional to place token on query string
    // if it is, place it on the headers where it should be, so checkToken can see it.
    // see follow the 'Bearer 034930493' format so checkToken can see it and decode it
    if (req.query && req.query.hasOwnProperty('access_token')) {
        // 'Bearer' is cruel value for jwt, it's not any value can be input.
        // 'Bearer' is something like namespace of jwt
        req.headers.authorization = jwtValue.concat(req.query.access_token);
    }

    if (req.headers.authorization && req.headers.authorization.indexOf(jwtValue) < 0) {
        req.headers.authorization = jwtValue.concat(req.headers.authorization);
    }

    // this will call next if token is valid and send error if its error.
    // it will attach the decoded token to req.user
    checkToken(req, res, next);
};

module.exports.signToken = user => {
    return jwt.sign(
        {
            id: user._id,
            username: user.username
        },
        config.secrets.jwt,
        {expiresIn: config.expireTime}
    );
}