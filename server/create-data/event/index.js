const MODEL_NAME = 'event';

const {readFileSync} = require('fs');
const {merge} = require('lodash');
const path = require('path');
const logger = require('../../util/logger');

const content = readFileSync(path.join(__dirname, 'data.json'), 'utf8');
const data = JSON.parse(content);

const createDoc = require('../util/createDocument');
const model = require('../../api/' + MODEL_NAME + '/model');

const create = function (params) {

    logger.log('Mongo - Creating', data.length, MODEL_NAME + '(s)');

    const promises = data.map(function (item) {
        return createDoc(model, item);
    });

    return Promise.all(promises)
        .then(function (items) {
            return merge({events: items}, params || {});
        });
}

module.exports = {
    create,
    model
};