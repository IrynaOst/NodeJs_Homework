const router = require('express').Router();

const {user} = require('../../controllers');
const {userMiddleware} = require('../../middleware');
const {render} = require('../../controllers');

router.get('/', render.registerUser);

router.get('/:userId', userMiddleware.isUserPresentMiddleware, user.getById);
router.get('/:userId/houses', user.getUserWithHouseById);
router.post('/', userMiddleware.checkUserValidityMiddleware, user.createUser);
router.patch('/:userId', userMiddleware.isUserPresentMiddleware, user.updateUser);

module.exports = router;