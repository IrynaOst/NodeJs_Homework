const dataBase = require('../../dataBase').getInstance();
  
module.exports = async (whereObj, updateObj) => {
    const HouseModel = dataBase.getModel('House');
    
    await HouseModel.update(updateObj, {
        where: whereObj
    }); 
}