const router = require('express').Router();

const {house} = require('../../controllers');
const {houseMiddleware} = require('../../middleware');
const {render} = require('../../controllers');

router.get('/', render.createHouse);

router.get('/:houseId', houseMiddleware.isHousePresentMiddleware, house.getById);
router.post('/', houseMiddleware.checkHouseValidityMiddleware, house.createHouse);
router.patch('/:houseId', houseMiddleware.isHousePresentMiddleware, house.updateHouse);

module.exports = router;