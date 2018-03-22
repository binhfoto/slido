const router = require('express').Router();
const controller = require('./controller.js');

const auth = require('../../auth/auth');
const decodeToken = auth.decodeToken();

router.param('code', controller.params);

// only admin can get all or create new events
router.route('/')
    .get(decodeToken, controller.get)
    .post(decodeToken, controller.post);

// audience can only join event with code
router.route('/:code')
    .get(controller.getOne);

module.exports = router;