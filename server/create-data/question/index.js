const MODEL_NAME = 'question';

const {readFileSync} = require('fs');
const {merge} = require('lodash');
const path = require('path');
const logger = require('../../util/logger');

const content = readFileSync(path.join(__dirname, 'data.json'), 'utf8');
const data = JSON.parse(content);

const createDoc = require('../util/createDocument');
const model = require('../../api/' + MODEL_NAME + '/model');

const create = function (params) {

    const {events} = params;
    let promises = [];

    logger.log('Mongo - Creating', data.length * events.length, MODEL_NAME + '(s)');

    events.forEach(event => {
        const {_id} = event;
        promises = promises.concat(data.map(function (item) {
            return createDoc(model, merge(item, {eventId: _id}));
        }));
    });

    return Promise.all(promises)
        .then(function (items) {
            return merge({question: items}, params || {});
        });
}

module.exports = {
    create,
    model
};