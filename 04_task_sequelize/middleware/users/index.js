const isUserPresentMiddleware = require('./isUserPresent.middleware');
const isUserInDBMiddleware = require('./isUserInDB.middleware');
const isEditUserPresentMiddleware = require('./isEditUserPresent.middleware');
const checkUserValidityMiddleware = require('./checkUserValidity.middleware');


module.exports = {
    isUserPresentMiddleware,
    isUserInDBMiddleware,
    isEditUserPresentMiddleware,
    checkUserValidityMiddleware
}