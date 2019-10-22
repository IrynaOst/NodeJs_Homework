const getHouseById = require('./getHouseById');
const updateHouseByParams = require('./updateHouseByParams');
const createNewHouse = require('./createNewHouse');
const getHousesByUserId = require('./getHousesByUserId');
const deleteHouseById = require('./deleteHouseById');
const uploadHousePhotos = require('./uploadHousePhotos');
const uploadHouseDocs = require('./uploadHouseDocs')

module.exports = {
    getHouseById,
    updateHouseByParams,
    createNewHouse,
    getHousesByUserId,
    deleteHouseById,
    uploadHousePhotos,
    uploadHouseDocs
}