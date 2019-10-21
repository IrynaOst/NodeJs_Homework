const router = require('express').Router();

const {auth, render} = require('../../controllers');
const {userMiddleware} = require('../../middleware');

router.get('/', render.auth);

router.post(
    '/users', 
    userMiddleware.authUserMiddleware, 
    auth.authUser
);

module.exports = router;