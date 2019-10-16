const router = require('express').Router();

const {user} = require('../../controllers');
const {userMiddleware} = require('../../middleware');
const {render} = require('../../controllers');

router.get('/auth', render.auth);
router.get('/', render.registerUser);
router.get('/update', render.updateUser);

router.get('/:userId', userMiddleware.isUserPresentMiddleware, user.getById);
router.post('/', userMiddleware.checkUserValidityMiddleware, user.createUser);
router.post('/update', userMiddleware.checkUserValidityMiddleware, userMiddleware.isEditUserPresentMiddleware, user.updateUser);
router.post('/auth', userMiddleware.isUserInDBMiddleware, user.getUserInDB);

module.exports = router;