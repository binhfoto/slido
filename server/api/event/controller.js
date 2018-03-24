const Moment = require('moment');
const MomentRange = require('moment-range');
const moment = MomentRange.extendMoment(Moment);

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
    getOne: (req, res, next) => {
        const {from, to} = req.event;
        if (from && to) {
            const range = moment.range(from, to);
            if(range.contains(Date.now())) {
                res.json({event: req.event});
            } else if (moment().isAfter(moment(to))) {
                next(new Error('This event is expired'));
            } else {
                next(new Error('This event is not available yet'));
            }
        } else {
            next(new Error('Cannot join non-scheduled event'));
        }
    },
    post: (req, res, next) => {
        Model
            // 'create' event will trigger some mongoose middleware, such as preSave
            .create(req.body)
            .then(res.json.bind(res), next);
    }
};
