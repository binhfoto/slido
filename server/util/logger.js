// no var needed here, colors will attach colors to String.prototype
require('colors');
const { toArray } = require('lodash');
const config = require('../config');

// create nothing function for when logging is disabled
const nothing = function () {
};

// check if logging is enabled in the config
// if it is, then use console.log
// if not, then use nothing function
var consoleLog = config.logging ? console.log.bind(console) : nothing;

var logger = {
    log: function () {
        // step 1: process the argument: color it
        // arguments is and array like object with all the passed arguments to this function
        var args = toArray(arguments)
            .map(function (arg) {
                if (typeof arg === 'object') {
                    // turn an object to a string so we can log all properties and color it
                    //let string = JSON.stringify(arg, 2);
                    //return string.magenta;
                    return arg;
                } else {
                    arg += '';
                    return arg.magenta;
                }
            });

        // step 2: pass arguments to real console.log
        // call either console.log or nothing here
        // with the console object as the context and the new colored args
        consoleLog.apply(console, args);
    }
};

module.exports = logger;