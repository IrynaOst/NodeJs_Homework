const router = require('express').Router();

const {house, render} = require('../../controllers');
const {houseMiddleware, checkAccessTakenMiddleware} = require('../../middleware');

router.get('/', render.createHouse);

router.post(
    '/', 
    houseMiddleware.checkHouseValidityMiddleware, 
    checkAccessTakenMiddleware, 
    house.createHouse
);

router.get(
    '/:houseId', 
    houseMiddleware.isHousePresentMiddleware, 
    house.getById
);

router.patch(
    '/:houseId', 
    houseMiddleware.isHousePresentMiddleware,
    checkAccessTakenMiddleware, 
    house.updateHouse
);

router.delete(
    '/:houseId', 
    houseMiddleware.isHousePresentMiddleware, 
    checkAccessTakenMiddleware, 
    house.deleteHouse
);

module.exports = router;