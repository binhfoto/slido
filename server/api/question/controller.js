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
            .then(questions => {
                res.json({questions});
            }, next);
    },
    post: (req, res, next) => {
        Model
        // 'create' event will trigger some mongoose middleware, such as preSave
            .create(req.body)
            .then(question => {
                res.json({question});
            }, next);
    },
    put: (req, res, next) => {
        const newQuestion = req.body;
        let currentQuestion = req.question;


        merge(currentQuestion, newQuestion);

        currentQuestion.save((err, question) => {
            if (err) {
                next(err);
            } else {
                res.json({question});
            }
        });
    },
    delete: (req, res, next) => {
        const question = req.question;
        question.remove((err, question) => {
            if (err) {
                next(err);
            } else {
                res.json({question});
            }
        });
    }
};
