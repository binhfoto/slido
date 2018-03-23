const logger = require('../util/logger');

const user = require('./user');
const event = require('./event');
const question = require('./question');

const MODELS = [user.model, event.model, question.model];

const cleanDB = function(){
    const cleanPromises = MODELS.map(function(model){
        return model.remove().exec();
    });
    return Promise.all(cleanPromises);
};

cleanDB() // pass data to next function
    .then(user.create)
    .then(event.create)
    .then(question.create)
    // log fake data to console
    //.then(logger.log.bind(logger))
