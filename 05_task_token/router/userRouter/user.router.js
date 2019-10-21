const router = require('express').Router();

const {user, render} = require('../../controllers');
const {userMiddleware, authMiddleware, filesMiddleware} = require('../../middleware');

router.get('/', render.registerUser);

router.post(
    '/', 
    userMiddleware.checkUserValidityMiddleware, 
    filesMiddleware.checkFileMiddleware,
    filesMiddleware.checkUserFilesCountMiddleware,
    user.createUser
);

router.get(
    '/:userId', 
    userMiddleware.isUserPresentMiddleware, 
    user.getById
);

router.patch(
    '/:userId', 
    userMiddleware.isUserPresentMiddleware, 
    authMiddleware.checkAccessTakenMiddleware, 
    user.updateUser
);

router.delete(
    '/:userId', 
    userMiddleware.isUserPresentMiddleware, 
    authMiddleware.checkAccessTakenMiddleware,
    user.deleteUser
);

router.get(
    '/:userId/houses', 
    userMiddleware.isUserPresentMiddleware, 
    user.getUserWithHouseById
);

module.exports = router;