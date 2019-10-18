const router = require('express').Router();

const {user} = require('../../controllers');
const {userMiddleware, checkAccessTakenMiddleware} = require('../../middleware');
const {render} = require('../../controllers');

router.get('/', render.registerUser);

router.get('/:userId', userMiddleware.isUserPresentMiddleware, user.getById);
router.get('/:userId/houses', userMiddleware.isUserPresentMiddleware, user.getUserWithHouseById);
router.post('/', userMiddleware.checkUserValidityMiddleware, user.createUser);
router.patch('/:userId', userMiddleware.isUserPresentMiddleware, checkAccessTakenMiddleware, user.updateUser);
router.delete('/:userId', userMiddleware.isUserPresentMiddleware, checkAccessTakenMiddleware, user.deleteUser);

module.exports = router;