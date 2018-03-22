const router = require('express').Router();
const controller = require('./controller.js');
const auth = require('../../auth/auth');

router.param('id', controller.params);

// any audience can post new question
router.route('/')
    .post(controller.post);

// only admin can delete or edit question
router.route('/:id')
    .put(auth.decodeToken(), controller.put)
    .delete(auth.decodeToken(), controller.delete);

module.exports = router;