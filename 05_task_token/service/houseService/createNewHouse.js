const dataBase = require('../../dataBase').getInstance();

module.exports = async (newHouse, userId) => {
    const HouseModel = dataBase.getModel('House');

    const {city, square, price} = newHouse;
    
    const newHouseObj = await HouseModel.create({
        user_id: userId,
        city: city,
        square: square,
        price: price
    }); 

    return newHouseObj && newHouseObj.dataValues && newHouseObj.dataValues.id;
}