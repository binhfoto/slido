const Model = require('./model.js');

module.exports = {
    params: (req, res, next, code) => {
        Model
            .findOne({ code })
            .exec()
            .then(
                event => {
                    if(!event){
                        next(new Error(`No event with code '${code}'`));
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
            .find({})
            .exec()
            .then(events => {
                res.json({events});
            }, next);
    },
    getOne: (req, res) => {
        res.json({event: req.event});
    },
    post: (req, res, next) => {
        Model
            // 'create' event will trigger some mongoose middleware, such as preSave
            .create(req.body)
            .then(res.json.bind(res), next);
    }
};
