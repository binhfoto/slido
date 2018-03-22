const { merge } = require('lodash');
const Model = require('./model.js');

module.exports = {
    params: (req, res, next, id) => {
        Model
            .findById(id)
            .exec()
            .then(
                question => {
                    if (!question) {
                        next(new Error('No question with ' + id));
                    }
                    else {
                        req.question = question;
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
            .then(res.json.bind(res), next);
    },
    post: (req, res, next) => {
        Model
        // 'create' event will trigger some mongoose middleware, such as preSave
            .create(req.body)
            .then(res.json.bind(res), next);
    },
    put: (req, res, next) => {
        let currentQuestion = req.question;
        const newQuestion = req.body;

        merge(currentQuestion, newQuestion);

        currentQuestion.save((err, item) => {
            if (err) {
                next(err);
            } else {
                res.json(item);
            }
        });
    },
    delete: (req, res, next) => {
        const question = req.question;
        question.remove((err, item) => {
            if (err) {
                next(err);
            } else {
                res.json(item);
            }
        });
    }
};
