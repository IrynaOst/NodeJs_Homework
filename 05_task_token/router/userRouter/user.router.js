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
    authMiddleware.checkAccessTakenMiddleware, 
    userMiddleware.isUserPresentMiddleware, 
    user.updateUser
);

router.delete(
    '/:userId', 
    authMiddleware.checkAccessTakenMiddleware, 
    userMiddleware.isUserPresentMiddleware, 
    user.deleteUser
);

router.get(
    '/:userId/houses', 
    userMiddleware.isUserPresentMiddleware, 
    user.getUserWithHouseById
);

module.exports = router;