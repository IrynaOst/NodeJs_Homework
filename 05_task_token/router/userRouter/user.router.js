const router = require('express').Router();

const {user} = require('../../controllers');
const {userMiddleware, checkAccessTakenMiddleware} = require('../../middleware');
const {render} = require('../../controllers');

router.get('/', render.registerUser);

router.post('/', userMiddleware.checkUserValidityMiddleware, user.createUser);
router.get('/:userId', userMiddleware.isUserPresentMiddleware, user.getById);
router.patch('/:userId', userMiddleware.isUserPresentMiddleware, checkAccessTakenMiddleware, user.updateUser);
router.delete('/:userId', userMiddleware.isUserPresentMiddleware, checkAccessTakenMiddleware, user.deleteUser);
router.get('/:userId/houses', userMiddleware.isUserPresentMiddleware, user.getUserWithHouseById);

module.exports = router;