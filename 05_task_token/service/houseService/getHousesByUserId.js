const dataBase = require('../../dataBase').getInstance();

module.exports = async userId => {
    const HouseModel = dataBase.getModel('House');

    const houses = await HouseModel.findAll({
        where: {
            id: userId
        }
    });
    return houses;
}