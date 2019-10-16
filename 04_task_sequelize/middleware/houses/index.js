const isHousePresentMiddleware = require('./isHousePresent.middleware');
const isEditHousePresentMiddleware = require('./isEditHousePresent.middleware');
const checkHouseValidityMiddleware = require('./checkHouseValidity.middleware');

module.exports = {
    isHousePresentMiddleware,
    isEditHousePresentMiddleware,
    checkHouseValidityMiddleware
}
