const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var _schema = new Schema({
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
        type: String
    },
    isHighlight : {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('question', _schema);