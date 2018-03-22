const router = require('express').Router();
const controller = require('./controller.js');
const auth = require('../../auth/auth');
const config = require('../../config');

const shouldAuthenticate = config.auth === false ? [] : [auth.decodeToken()];

router.param('id', controller.params);

// any audience can post new question
router.route('/')
    .get(shouldAuthenticate, controller.get)
    .post(controller.post);

// only admin can delete or edit question
router.route('/:id')
    .put(shouldAuthenticate, controller.put)
    .delete(shouldAuthenticate, controller.delete);

module.exports = router;