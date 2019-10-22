const dataBase = require('../../dataBase').getInstance();

module.exports = async (pathToHousePhotos) => {
    const HousePhotoModel = dataBase.getModel('HousePhoto');

    await HousePhotoModel.create(pathToHousePhotos);
}