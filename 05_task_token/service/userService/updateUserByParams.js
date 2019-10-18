const dataBase = require('../../dataBase').getInstance();
  
module.exports = async (whereObj, updateObj) => {
    const UserModel = dataBase.getModel('User');
    
    await UserModel.update(updateObj, {
        where: whereObj
    }); 
}