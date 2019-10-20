const router = require('express').Router();

const {user, render} = require('../../controllers');
const {userMiddleware} = require('../../middleware');

router.get('/', render.auth);

router.post(
    '/users', 
    userMiddleware.authUserMiddleware, 
    user.authUser
);

module.exports = router;