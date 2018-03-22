const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _schema = new Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        unique: true,
        required: true
    },
    from : {
        type: Date,
        required: true
    },
    to : {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('event', _schema);