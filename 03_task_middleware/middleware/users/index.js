const isUserPresentMiddleware = require('./isUserPresent.middleware');
const checkUserValidityMiddleware = require('./checkUserValidity.middleware');
const isUserInDBMiddleware = require('./isUserInDB.middleware');


module.exports = {
    isUserPresentMiddleware,
    checkUserValidityMiddleware,
    isUserInDBMiddleware
}