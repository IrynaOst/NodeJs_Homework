const router = require('express').Router();

const {user} = require('../../controllers');
const {userMiddleware} = require('../../middleware');
const {render} = require('../../controllers');

router.get('/auth', render.auth);
router.get('/', render.registerUser);

router.get('/:userId', userMiddleware.isUserPresentMiddleware, user.getById);
router.post('/', userMiddleware.checkUserValidityMiddleware, user.createUser);
router.post('/edit/:userId', userMiddleware.checkUserValidityMiddleware, userMiddleware.isUserPresentMiddleware, user.updateUser);
router.get('/edit/:userId', userMiddleware.isUserPresentMiddleware, user.getUserForUpdate);
router.post('/auth', userMiddleware.authUserMiddleware, user.getUserInDB);

module.exports = router;