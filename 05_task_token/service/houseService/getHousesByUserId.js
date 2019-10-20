const dataBase = require('../../dataBase').getInstance();

module.exports = async user_id => {
    const HouseModel = dataBase.getModel('House');

    const houses = await HouseModel.findAll({
        where: {
            user_id
        }
    });
    return houses;
}