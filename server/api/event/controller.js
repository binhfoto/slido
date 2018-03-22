const Model = require('./model.js');

module.exports = {
    params: (req, res, next, code) => {
        Model
            .findOne({ code })
            .exec()
            .then(
                event => {
                    if(!event){
                        next(new Error('No event with ' + code));
                    }
                    else {
                        req.event = event;
                        next();
                    }
                },
                next
            );
    },
    get: (req, res, next) => {
        Model
            .find()
            .exec()
            .then(res.json, next);
    },
    getOne: (req, res) => {
        res.json(req.event);
    },
    post: (req, res, next) => {
        Model
            // 'create' event will trigger some mongoose middleware, such as preSave
            .create(req.body)
            .then(res.json, next);
    }
};
