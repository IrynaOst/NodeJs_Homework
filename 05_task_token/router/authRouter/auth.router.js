const router = require('express').Router();

const {auth, render} = require('../../controllers');
const {authMiddleware} = require('../../middleware');

router.get('/', render.auth);

router.post(
    '/users', 
    authMiddleware.authUserMiddleware,
    auth.authUser
);

module.exports = router;