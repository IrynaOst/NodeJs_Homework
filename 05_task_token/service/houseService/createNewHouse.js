const dataBase = require('../../dataBase').getInstance();

module.exports = async newHouse => {
    const HouseModel = dataBase.getModel('House');
    
    const newHouseObj = await HouseModel.create(newHouse); 

    return newHouseObj && newHouseObj.dataValues.id;
}