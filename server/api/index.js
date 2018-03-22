// create api router
const router = require('express').Router();

// api router will mount other routers for all our resources
// each resource directory has a resourceRoute.js file with the router ready to go

// require them and mount them to their respective routes below
// by default, 'require' function will get the index.js file
router.use('/events', require('./event/route'));
router.use('/questions', require('./question/route'));

module.exports = router;