const router = require('express').Router();

const {house} = require('../../controllers');
const {houseMiddleware, checkAccessTakenMiddleware} = require('../../middleware');
const {render} = require('../../controllers');

router.get('/', render.createHouse);

router.post('/', houseMiddleware.checkHouseValidityMiddleware, checkAccessTakenMiddleware, house.createHouse);
router.get('/:houseId', houseMiddleware.isHousePresentMiddleware, house.getById);
router.patch('/:houseId', houseMiddleware.isHousePresentMiddleware, checkAccessTakenMiddleware, house.updateHouse);
router.delete('/:houseId', houseMiddleware.isHousePresentMiddleware, checkAccessTakenMiddleware, house.deleteHouse);

module.exports = router;