const router = require('express').Router();

const {user} = require('../../controllers');
const {userMiddleware} = require('../../middleware');
const {render} = require('../../controllers');

router.get('/', render.auth);

router.post(
    '/users', 
    userMiddleware.authUserMiddleware, 
    user.authUser
);

module.exports = router;