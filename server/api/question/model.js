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
    }
});

module.exports = mongoose.model('question', _schema);