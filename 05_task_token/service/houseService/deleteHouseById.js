const dataBase = require('../../dataBase').getInstance();
  
module.exports = async houseById => {
    const HouseModel = dataBase.getModel('House');
    
    await HouseModel.destroy({
        where: {
           id: houseById  
        } 
    }); 
}