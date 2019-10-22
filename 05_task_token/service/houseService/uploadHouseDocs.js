const dataBase = require('../../dataBase').getInstance();

module.exports = async (pathToHouseDocs) => {
    const HouseDocModel = dataBase.getModel('HouseDoc');

    await HouseDocModel.create(pathToHouseDocs);
}