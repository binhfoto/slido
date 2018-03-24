const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _schema = new Schema({
    eventId: {
        type: Schema.Types.ObjectId,
        ref: 'event',
        required: true
    },
    question: {
        type: String,
        required: true
    },
    author: {
        type: String,
        default: 'Anonymous'
    },
    isHighlight : {
        type: Boolean,
        default: false
    },
    vote: {
        type: Number,
        default: 0
    },
    created: {
        type: Date,
        default: Date.now()
    },
    updated: {
        type: Date,
        default: Date.now()
    }
});

_schema.pre('save', function (next) {
    this.updated = Date.now();

    next();
});

module.exports = mongoose.model('question', _schema);