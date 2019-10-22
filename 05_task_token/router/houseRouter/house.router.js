const router = require('express').Router();

const {house, render} = require('../../controllers');
const {houseMiddleware, authMiddleware, filesMiddleware} = require('../../middleware');

router.get('/', render.createHouse);

router.post(
    '/', 
    houseMiddleware.checkHouseValidityMiddleware, 
    authMiddleware.checkAccessTakenMiddleware,
    filesMiddleware.checkFileMiddleware,
    house.createHouse
);

router.get(
    '/:houseId', 
    houseMiddleware.isHousePresentMiddleware, 
    house.getById
);

router.patch(
    '/:houseId', 
    authMiddleware.checkAccessTakenMiddleware,
    houseMiddleware.isHousePresentMiddleware,
    house.updateHouse
);

router.delete(
    '/:houseId', 
    authMiddleware.checkAccessTakenMiddleware,
    houseMiddleware.isHousePresentMiddleware,
    house.deleteHouse
);

module.exports = router;