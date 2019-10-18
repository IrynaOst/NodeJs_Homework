const createUser = require('./createUser');
const getById = require('./getById');
const authUser = require('./authUser');
const updateUser = require('./updateUser');
const getUserWithHouseById = require('./getUserWithHouseById');
const deleteUser = require('./deleteUser');

module.exports = {
    createUser,
    getById,
    authUser,
    updateUser,
    getUserWithHouseById,
    deleteUser
}