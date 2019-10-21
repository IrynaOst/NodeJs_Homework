const getById = require('./getById');
const updateUserByParams = require('./updateUserByParams');
const createNewUser = require('./createNewUser');
const authUser = require('../authService/authUser');
const deleteUserById = require('./deleteUserById');

module.exports = {
    getById,
    updateUserByParams,
    createNewUser,
    authUser,
    deleteUserById
}